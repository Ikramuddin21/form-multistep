const AddressFormField = ({ register, errors }) => {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold text-center">Address Details</h1>
      <div className="flex flex-col gap-3.5">
        <div>
          <label htmlFor="street_address">Street Address</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="street_address"
            placeholder="Street Address"
            {...register("street_address")}
          />
          {errors?.street_address?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.street_address?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="city"
            placeholder="City"
            {...register("city")}
          />
          {errors?.city?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.city?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="zip_code">Zip Code</label>
          <input
            className="w-full border border-gray-500 outline-0 rounded py-1.5 pl-1.5 mt-0.5"
            id="zip_code"
            type="number"
            placeholder="Zip Code"
            {...register("zip_code")}
          />
          {errors?.zip_code?.message && (
            <p className="text-red-700 font-bolder text-sm">
              {errors?.zip_code?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressFormField;
