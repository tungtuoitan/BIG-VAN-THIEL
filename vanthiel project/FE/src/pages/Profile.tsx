import InforLine from "@SRC/components/others/InforLine";
import Layout from "@SRC/components/layout/Layout";
import ALink from "@SRC/components/buttons/ALink";
import { resetProfile, updateInfor } from "@SRC/store/slices/profileSlice";
import { RootState } from "@SRC/store/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "@SRC/components/buttons/Button";
import Form from "@SRC/components/forms/Form";
import { useState } from "react";
import { toggleUpdatePopup } from "@SRC/store/slices/commonSlice";

const Profile: React.FC = () => {
  const infor = useSelector((state: RootState) => state.profile.infor);
  const [inforBeforeChange, setInforBeforeChange] = useState(infor);
  const isUpdatePopupOpen = useSelector(
    (state: RootState) => state.common.isUpdatePopupOpen
  );
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(resetProfile());
  };

  const handleCancel = () => {
    dispatch(toggleUpdatePopup(false));
    dispatch(
      updateInfor([
        "name",
        inforBeforeChange.name ? inforBeforeChange.name : "",
      ])
    );
    dispatch(
      updateInfor([
        "email",
        inforBeforeChange.email ? inforBeforeChange.email : "",
      ])
    );
    dispatch(
      updateInfor([
        "password",
        inforBeforeChange.password ? inforBeforeChange.password : "",
      ])
    );
  };
  const clickUpdate = () => {
    dispatch(toggleUpdatePopup(true));
    setInforBeforeChange(infor);
  };

  return (
    <Layout>
      <main className="mt-24 ">
        <div className="flex justify-center min-h-screen">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="font-light text-sm mt-4 p-4 lg:px-0">
              <h1 className="text-xl40 font-bold">My Account</h1>
              <h2 className="text-xl mb-4">Account Details</h2>
              <div className="mb-6">
                <InforLine property="name" infor={infor} />
                <InforLine property="email" infor={infor} />
                <InforLine property="password" infor={infor} />
              </div>
              <div className="flex justify-between">
                <Button title="Update" handleClick={clickUpdate} />
                <div className="text-base font-medium">
                  <ALink title="Logout" link="/" onClick={logout} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 w-full h-screen justify-center pt-32 bg-gray-trans ${
            isUpdatePopupOpen ? "flex" : "hidden"
          }`}
        >
          <div className="w-full max-w-[500px] z-10">
            <div className="w-full flex justify-end">
              <button
                className="hover:underline text-white opacity-40 hover:opacity-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
            <Form type="update" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
