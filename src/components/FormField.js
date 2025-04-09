const FormField = () => {
  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <div className="max-w-[600px] w-full">
        <div className="w-full flex justify-between mb-3">
          <button className="cursor-pointer bg-gray-700 text-white rounded px-2 py-1">
            Previous
          </button>
          <button className="cursor-pointer bg-gray-700 text-white rounded px-2 py-1">
            Next
          </button>
        </div>
        <form className="flex flex-col gap-3">
          <div>
            <label htmlFor="full_name">Full Name</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="full_name"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="phone_number"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label htmlFor="street_address">Street Address</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="street_address"
              placeholder="Street Address"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="city"
              placeholder="City"
            />
          </div>
          <div>
            <label htmlFor="zip_code">Zip Code</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="zip_code"
              placeholder="Zip Code"
            />
          </div>
          <div>
            <label htmlFor="user_name">Username</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="user_name"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
              id="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormField;
