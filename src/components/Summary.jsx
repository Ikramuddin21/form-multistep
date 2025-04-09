const Summary = ({ formData, reset, setStep }) => {
  const handleFinalSubmit = () => {
    console.log("Submitted data:", formData);
    alert("Form submitted! Check console for data.");
    reset();
    setStep(1);
  };
  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-semibold mb-4">Summary</h1>
        <div className="space-y-2">
          <p>
            <strong>Full Name:</strong> {formData.full_name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone_number}
          </p>
          <p>
            <strong>Address:</strong> {formData.street_address}, {formData.city}{" "}
            - {formData.zip_code}
          </p>
          <p>
            <strong>Username:</strong> {formData.user_name}
          </p>
        </div>
      </div>
      {/* <div className="mt-6"> */}
      <button
        onClick={handleFinalSubmit}
        className="mt-6 cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
      {/* </div> */}
    </>
  );
};

export default Summary;
