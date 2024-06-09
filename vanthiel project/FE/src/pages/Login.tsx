import React from "react";
import { Link } from "react-router-dom";
import Layout from "@SRC/components/layout/Layout";
import Form from "@SRC/components/forms/Form";

const Login: React.FC = () => {
  return (
    <Layout>
      <main className="mt-24">
        <div className="flex justify-center min-h-screen">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="px-[60px] mt-4">
              <div className="w-full flex flex-col items-center">
                <Form type="login" />
                <div className=" w-full max-w-[500px] px-12 flex justify-between mt-4">
                  <Link to="/register" className="hover:underline">
                    Create an account
                  </Link>
                  <Link to="/" className="hover:underline">
                    Forgot your password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
