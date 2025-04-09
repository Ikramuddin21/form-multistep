import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const AccountFormField = ({ register, errors }) => {
  const [show, setShow] = useState({ pass: false, conPass: false });
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold text-center">
        Account Information
      </h1>
      <div className="flex flex-col gap-3.5">
        <div>
          <label htmlFor="user_name">Username</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="user_name"
            placeholder="Username"
            {...register("user_name")}
          />
          {errors?.user_name?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.user_name?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password">Password</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="password"
            type={show.pass ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />
          <div
            className="absolute right-3 top-11 transform -translate-y-1/2 text-xl text-gray-500 cursor-pointer"
            onClick={() => setShow((prev) => ({ ...prev, pass: !prev.pass }))}
          >
            {show.pass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
          {errors?.password?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="confirm_password"
            type={show.conPass ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirm_password")}
          />
          <div
            className="absolute right-3 top-11 transform -translate-y-1/2 text-xl text-gray-500 cursor-pointer"
            onClick={() =>
              setShow((prev) => ({ ...prev, conPass: !prev.conPass }))
            }
          >
            {show.conPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
          {errors?.confirm_password?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.confirm_password?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountFormField;
