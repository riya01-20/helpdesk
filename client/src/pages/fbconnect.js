import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Facebook Page Integration
          <br></br>
          Integrated Page: <b>Amazon Business</b>
        </h2>
        <div>
          <div className="mt-8">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
            Delete Integration
            </button>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              Reply to Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
