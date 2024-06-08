import React from "react";
import DirectoryTree from "@SRC/components/DirectoryTree";
import Layout from "@SRC/components/layout/Layout";
import { LoginForm } from "./Login";
import ALink from "@SRC/components/buttons/ALink";
import Form from "@SRC/components/Form";

export interface SignupForm extends LoginForm {
  name: string;
}

const SignUp: React.FC = () => {
  return (
    <Layout>
      <main>
        <DirectoryTree />
        <div className="flex justify-center min-h-screen">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="px-[60px] mt-4">
              <div className="w-full flex flex-col items-center">
                <Form type="login" />
                <div>
                  <div className=" w-full max-w-[500px] px-12 flex gap-2 mt-4">
                    <p className="hover:underline">Already have an account?</p>
                    <ALink title="Login" link="/login" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SignUp;