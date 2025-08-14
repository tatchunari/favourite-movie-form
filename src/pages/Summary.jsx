const Summary = ({ formData, returnPage }) => {
  if (!formData) return <p className="text-center text-gray-500 mt-4">No data submitted yet.</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Form Response Summary</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {formData.name}</p>
          <p><span className="font-semibold">Email:</span> {formData.email}</p>
          <p><span className="font-semibold">Favorite Movie:</span> {formData.favMovie}</p>
          <p><span className="font-semibold">Comment:</span> {formData.comment ? formData.comment : "-"}</p>
        </div>
        <button
          onClick={returnPage}
          className="mt-6 w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default Summary;
