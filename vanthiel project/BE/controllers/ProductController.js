const Product = require('../models/Product')

module.exports = {
    //get all product
    async getAll(req, res) {
        let conditions = {}
        let products = []

        conditions.category = req.query.category || null
        conditions.color = req.query.color || null
        conditions.size = req.query.size || null
        conditions.brand = req.query.brand || null

        const sortType = req.query.sortType || 'default'
        const limit = req.query.size ? +req.query.size : 20;
        const offset = req.query.page ? (req.query.page - 1) * limit : 0;

        if (sortType == 'default') {
            products = await Product.find();
            console.log(products)
        }

        // if (sortType == 'popular') {
        //     books = await Book.findAll({
        //         where: conditions,
        //         include: Author,
        //         attributes: {
        //             include: [
        //                 [sequelize.literal(`(select COUNT(*) from reviews where reviews.book_id = books.id)`), 'review_count']
        //             ]
        //         },
        //         order: [
        //             [sequelize.literal('review_count'), 'DESC'],
        //             ['book_price', 'ASC']
        //         ],
        //         limit: limit,
        //         offset: offset
        //     });
        // }

        // if (sortType == 'priceAsc') {
        //     books = await Book.findAll({
        //         where: conditions,
        //         include: Author,
        //         order: [['book_price', 'ASC']],
        //         limit: limit,
        //         offset: offset
        //     });
        // }

        // if (sortType == 'priceDesc') {
        //     books = await Book.findAll({
        //         where: conditions,
        //         include: Author,
        //         order: [['book_price', 'DESC']],
        //         limit: limit,
        //         offset: offset
        //     });
        // }
    
        // const totalItem = await Book.findAndCountAll({
        //     where: conditions
        // })

        return res.json({ 
            data: products,
            status: 200
        })
    },

    //get top book on sale
    async getTopOnSale(req, res){
        const top = req.query.top || 10
        books = await Book.findAll({ 
            attributes: {
                include: [
                    [sequelize.literal(`(select (books.book_price - discounts.discount_price) from discounts
                    where discounts.book_id = books.id 
                )`), 'sub_price'
                    ],
                    [sequelize.literal(`(select COUNT(*) from discounts where discounts.book_id = books.id)`), 'discount_count']
                ]
            },
            include: Author,
            order: [
                [sequelize.literal('discount_count'), 'DESC'],
                [sequelize.literal('sub_price'), 'DESC'],
                ['book_price', 'ASC']
            ],
            limit: top
        });

        return res.json({ 
            data: books,
            status: 200
         })
    },

    //get top book recommended
    async getTopRecommended(req, res){
        const top = req.query.top || 8
        const tempSql = `select books.id from books join reviews on books.id = reviews.book_id group by books.id having count(*) > 0`
        books = await Book.findAll({ 
            attributes: {
                include: [
                    [sequelize.literal(`(select avg(cast(reviews.rating_start as int)) from reviews where books.id = reviews.book_id 
                        group by books.id
                )`), 'rating_avg'
                    ]
                ]
            },
            where: {
                id: { 
                    [sequelize.Op.in]: sequelize.literal('(' + tempSql + ')') 
                }
            },
            include: Author,
            order: [
                [sequelize.literal('rating_avg'), 'DESC'],
                ['book_price', 'ASC']
            ],
            limit: top
        });

        return res.json({ 
            data: books,
            status: 200
         })
    },

    //get top book popular
    async getTopPopular(req, res){
        const top = req.query.top || 8

        books = await Book.findAll({ 
            attributes: {
                include: [
                    [sequelize.literal(`(select COUNT(*) from reviews where reviews.book_id = books.id)`), 'review_count']
                ]
            },
            include: Author,
            order: [
                [sequelize.literal('review_count'), 'DESC'],
                ['book_price', 'ASC']
            ],
            limit: top
        });

        return res.json({ 
            data: books,
            status: 200
         })
    },

    // detail book
    async detail(req, res) {
        const id = req.params.id
        const book = await Book.findOne({
            where: {
                id: id
            },
            attributes: {
                include: [
                    [sequelize.literal(`(select avg(cast(reviews.rating_start as int)) from reviews where reviews.book_id = books.id and books.id = ${id})`), 'rating_avg']
                ]
            },
            include: Author
        })
        return res.json({ 
            data: book,
            status: 200
         })
    },

    // function get review by book 
    async getReview(req, res) {
        const id = req.params.id
        const sortType = req.query.sortType || 'desc'
        const limit = req.query.size ? +req.query.size : 5;
        const offset = req.query.page ? (req.query.page - 1) * limit : 0;
        const data = await Review.findAll({ 
            where: {
                book_id: id
            },
            order: [
                ['review_date', sortType]
            ],
            limit: limit,
            offset: offset
        });

        const star_1 = await Review.findAndCountAll({
            where: { book_id: id, rating_start: '1' }
        })
        const star_2 = await Review.findAndCountAll({
            where: { book_id: id, rating_start: '2' }
        })
        const star_3 = await Review.findAndCountAll({
            where: { book_id: id, rating_start: '3' }
        })
        const star_4 = await Review.findAndCountAll({
            where: { book_id: id, rating_start: '4' }
        })
        const star_5 = await Review.findAndCountAll({
            where: { book_id: id, rating_start: '5' }
        })

        const totalItem = await Review.findAndCountAll({
            where: {book_id: id}
        })
        
        return res.json({ 
            data: data,
            status: 200,
            star_1: star_1.count,
            star_2: star_2.count,
            star_3: star_3.count,
            star_4: star_4.count,
            star_5: star_5.count,
            totalItem: totalItem.count
         })
    },

    //add review
    async addReview(req, res) {
        const id = req.params.id
        const review_title = req.body.review_title
        const review_details = req.body.review_details || ''
        const rating_start = req.body.rating_start
        const current_date = new Date()
        const review = await Review.create({
            book_id: id,
            review_title: review_title,
            review_details: review_details,
            rating_start: rating_start,
            review_date: current_date
        })

        return res.json({
            data: review,
            status: 200
        })
    }
}