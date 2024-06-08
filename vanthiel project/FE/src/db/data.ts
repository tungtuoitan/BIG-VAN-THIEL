const data = [
  {
    id: 1,
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Air Monarch IV",
    price: 200,
    brand: "nike",
    colors: ["black", "red", "green", "white", "blue"],
    sizes: ["S", "M", "L", "XL"],
    category: "sneakers",
    userType: "men",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Air Vapormax Plus",
    userType: "men",
    id: 2,
    price: 200,
    brand: "nike",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "red", "green", "white", "blue"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Waffle One Sneaker",
    id: 3,
    price: 200,
    userType: "men",
    brand: "nike",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Running Shoe",
    id: 4,
    price: 200,
    brand: "adidas",
    userType: "men",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    userType: "men",
    title: "Flat Slip On Pumps",
    id: 5,
    price: 200,
    brand: "vans",
    category: "flats",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Knit Ballet Flat",
    userType: "woman",
    id: 6,
    price: 50,
    brand: "adidas",
    category: "flats",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Loafer Flats",
    userType: "woman",
    id: 7,
    price: 50,
    brand: "vans",
    category: "flats",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Zoom Freak",
    userType: "woman",
    id: 8,
    price: 200,
    brand: "nike",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Men's Sneaker",
    id: 9,
    price: 200,
    userType: "woman",
    brand: "adidas",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "PUMA BLACK-OCE",
    id: 11,
    price: 150,
    userType: "woman",
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Pacer Future Sneaker",
    userType: "woman",
    id: 12,
    price: 150,
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    userType: "woman",
    title: "Unisex-Adult Super",
    id: 13,
    price: 150,
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Roma Basic Sneaker",
    userType: "woman",
    id: 14,
    price: 150,
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Pacer Future Doubleknit",
    userType: "woman",
    id: 15,
    price: 150,
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Fusion Evo Golf Shoe",
    userType: "woman",
    id: 16,
    price: 100,
    brand: "puma",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Rainbow Chex Skate",
    id: 17,
    price: 100,
    userType: "woman",
    brand: "vans",
    category: "flats",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Low-Top Trainers",
    userType: "woman",
    id: 18,
    price: 100,
    brand: "vans",
    category: "sandals",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "vans Unisex Low-Top",
    id: 19,
    price: 100,
    userType: "woman",
    brand: "vans",
    category: "sandals",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Classic Bandana Sneakers",
    id: 22,
    price: 50,
    userType: "woman",
    brand: "nike",
    category: "sandals",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Chunky High Heel",
    id: 23,
    price: 50,
    userType: "woman",
    brand: "vans",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Slip On Stiletto High Heel",
    id: 24,
    price: 100,
    userType: "woman",
    brand: "puma",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "DREAM PAIRS Court Shoes",
    id: 25,
    price: 150,
    userType: "woman",
    brand: "nike",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "nike Air Vapormax Plus",
    userType: "woman",
    id: 26,
    price: 200,
    brand: "nike",
    category: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },

  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Low Mid Block Heels",
    id: 27,
    price: 200,
    userType: "woman",
    brand: "nike",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Chunky High Heel",
    id: 28,
    price: 50,
    userType: "woman",
    brand: "adidas",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Amore Fashion Stilettos",
    userType: "woman",
    id: 29,
    price: 150,
    brand: "adidas",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Bridal Sandals Glitter",
    id: 31,
    price: 50,
    userType: "woman",
    brand: "adidas",
    category: "heels",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
  {
    img: [
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
      "/src/assets/sample.webp",
    ],
    title: "Wedding Prom Bridal",
    id: 32,
    price: 50,
    userType: "woman",
    brand: "adidas",
    category: "flats",
    sizes: ["S", "M", "L", "XL"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.",
    colors: ["black", "red", "green", "white", "blue"],
  },
];

export default data;
