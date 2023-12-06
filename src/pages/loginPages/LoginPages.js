import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//login context
import { LoginContext } from "../../component/login/LoginProvider";
const LoginPages = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(LoginContext);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    if (localStorage.getItem("name")) {
      user.name = localStorage.getItem("name");
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    //check condition
    if (name === "admin" && pass === "1") {
      login(name);
      navigate("/");
    }
  };

  return (
    <div className="w-full h-full px-[22px] flex items-center justify-center transition-all duration-300 trn">
      <div className="w-[70%] h-[80%]  border-[1px] mt-[22px] flex flex-col items-center justify-center pb-[22px] ">
        <h4 className="text-[1.3rem] font-bold py-[12px] text-center">Login</h4>
        {/* form input */}
        <div className="my-[8px] w-[90%] md:w-[65%] lg:w-[50%] ">
          <label htmlFor="user__name " className="text-gray-500 ">
            Name:
          </label>
          <br />
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border-[1px] border-[#888] px-[4px] w-full h-[32px] text-[0.9rem] mt-[4px] "
            id="user__name"
            autoFocus
          />
        </div>
        {/* form input */}
        <div className="my-[8px] w-[90%] md:w-[65%] lg:w-[50%]">
          <label htmlFor="user__pass" className="text-gray-500">
            Password:
          </label>
          <br />
          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="border-[1px] border-[#888] px-[4px]  w-full h-[32px] text-[0.9rem] mt-[4px]"
            id="user__pass"
          />
        </div>
        {/* button login */}
        <input
          type="submit"
          value="Login"
          className="border-[1px] cursor-pointer bg-[#FEBD68] w-[90%] md:w-[65%] lg:w-[50%] h-[34px]"
          onClick={handleLogin}
        />
        <h4>&</h4>
        <h4>Google</h4>
      </div>
    </div>
  );
};

export default LoginPages;
