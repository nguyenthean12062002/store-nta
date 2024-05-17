import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../component/login/LoginProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { GrFormView } from "react-icons/gr";

const ModalLogin = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(LoginContext);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [viewPass, setViewPass] = useState(false);
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");

  useEffect(() => {
    if (localStorage.getItem("name")) {
      user.name = localStorage.getItem("name");
    }
  }, [user]);
  // hanlde login
  const handleLogin = (e) => {
    e.preventDefault();
    if (name === " " || pass === " ") {
      toast.error("Enter full confidential account informati");
    }
    //check condition
    if (name === "admin" && pass === "1") {
      login(name);
      setName("");
      setPass("");
      toast.success("Login sucess");
      navigate("/");
    } else {
      toast.error("Account or password is incorrect");
    }
  };
  //  error name
  const handleBlur = (e) => {
    if (e.target.value === "" || e.target.value === " ") {
      setError("invalid no empty!");
    } else {
      setError("");
    }
  };
  //   error pass
  const hanldeBlurPass = (e) => {
    if (e.target.value === "" || e.target.value === " ") {
      setErrorPass("invalid no empty!");
    } else {
      setErrorPass("");
    }
  };
  return (
    <>
      <div className="transition-all duration-300 fixed z-[100] top-0 right-0 left-0 m-auto mt-[25%]  md:mt-[3%] w-[90%] md:w-[70%] h-[50%] lg:h-[90%] bg-bg shadow-4xl ">
        <div className="w-full h-full  md:min-h-[70vh] relative px-[22px] flex items-start justify-center transition-all duration-300 ">
          <div className=" w-[90%] md:w-[80%] lg:w-[70%] h-[85%] xl:h-[80%]   mt-[22px] flex flex-col items-center justify-center pb-[22px] ">
            <h4 className="text-[1.3rem] text-red  lg:text-[1.5rem] font-bold py-[12px] text-center">
              LOGIN
            </h4>
            {/* form input */}
            <div className="my-[8px] w-[100%] md:w-[65%] lg:w-[60%] ">
              <label htmlFor="user__name " className="text-gray-500 ">
                Name:
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={handleBlur}
                className="border-[1px] border-[#888] px-[4px] w-full h-[32px] text-[0.9rem] mt-[4px] "
                id="user__name"
                autoFocus
              />
              {/* show error */}
              <div className="py-[4px]">
                <h5 className="text-red h-[12px] underline text-[0.8rem] pl-half">
                  {error}
                </h5>
              </div>
            </div>
            {/* form input */}
            {/* pass */}
            <div className="my-[8px] w-[100%] md:w-[65%] lg:w-[60%] relative">
              <label htmlFor="user__pass" className="text-gray-500">
                Password:
              </label>
              <br />
              <input
                type={viewPass ? "text" : "password"}
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                onBlur={hanldeBlurPass}
                className="border-[1px] border-[#888] px-[4px]  w-full h-[32px] text-[0.9rem] mt-[4px]"
                id="user__pass"
              />
              {/* show error */}
              <div className="py-[4px]">
                <h6 className="text-red h-[12px] underline text-[0.8rem] pl-half">
                  {errorPass}
                </h6>
              </div>
              {/* show pass  */}
              <div
                className="top-[34%] right-0 absolute cursor-pointer"
                onClick={() => {
                  setViewPass(!viewPass);
                }}
              >
                <GrFormView className="text-[1.5rem] text-main" />
              </div>
            </div>
            {/* quên mật khẩu và nhớ tài khoản */}
            <div className="w-[100%] md:w-[65%] lg:w-[60%]  py-half flex items-center justify-between">
              <div className=" flex items-center justify-start">
                <input
                  type="checkbox"
                  className="mr-[4px] text-red-500"
                  id="checkRemember"
                />
                <label
                  htmlFor="checkRemember"
                  className="select-none cursor-pointer text-gray-500 text-[0.9rem]"
                >
                  Remember me!
                </label>
              </div>
              <h4 className="text-end text-red underline cursor-pointer">
                Forgot password?
              </h4>
            </div>
            {/* button login */}
            <input
              type="submit"
              value="Login"
              className="cursor-pointer text-white bg-main w-[100%] mt-half md:w-[65%] lg:w-[60%] h-[42px] block"
              onClick={handleLogin}
            />
            {/* <h4>&</h4>
          <h4>Google</h4> */}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ModalLogin;
