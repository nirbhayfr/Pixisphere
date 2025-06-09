"use client";

function Error({ error }) {
     return (
          <div className="w-full h-full flex items-center justify-center">
               <div>{error.message}</div>
          </div>
     );
}

export default Error;
