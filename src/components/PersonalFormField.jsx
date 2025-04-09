const PersonalFormField = ({ register, errors }) => {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold text-center">
        Personal Information
      </h1>
      <div className="flex flex-col gap-3.5">
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="full_name"
            placeholder="Full Name"
            {...register("full_name")}
          />
          {errors?.full_name?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.full_name?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors?.email?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="phone_number"
            placeholder="Phone Number"
            {...register("phone_number")}
          />
          {errors?.phone_number?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.phone_number?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalFormField;
