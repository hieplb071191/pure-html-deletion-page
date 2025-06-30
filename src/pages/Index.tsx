
const Index = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full space-y-6">
          {/* Header */}
          <h1 className="text-2xl font-bold text-rose-600 text-center">Delete Your Facebook Data</h1>
          <p className="text-gray-700 text-sm text-center">
            If you want to delete your data associated with our app, please enter your Facebook user ID below.
          </p>

          {/* Form */}
          <form
              action="https://your-backend.com/api/facebook-delete"
              method="POST"
              className="space-y-4"
          >
            <div>
              <label htmlFor="fbid" className="block text-sm font-medium text-gray-700">
                Facebook User ID
              </label>
              <input
                  type="text"
                  id="fbid"
                  name="fbid"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 focus:outline-none"
              />
            </div>

            <button
                type="submit"
                className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition"
            >
              Request Data Deletion
            </button>
          </form>

          {/* Alternative Contact */}
          <p className="text-sm text-center text-gray-600">
            Alternatively, you may email us at{' '}
            <a
                href="mailto:good.boy.0991@gmail.com"
                className="text-rose-600 underline hover:text-rose-700"
            >
              good.boy.0991@gmail.com
            </a>{' '}
            to request deletion.
          </p>
        </div>
      </div>
  );
};

export default Index;
