"use client";

import Cards from "./Cards";

function page() {
     return (
          <div>
               <h2 className="text-3xl p-4 text-primary font-semibold uppercase max-xxs:text-2xl">
                    Explore Photographers
               </h2>
               <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                    <Cards />
               </div>
          </div>
     );
}

export default page;
