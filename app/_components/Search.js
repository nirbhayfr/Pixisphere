"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
     const [searchInput, setSearchInput] = useState("");
     const router = useRouter();
     const searchParams = useSearchParams();

     function handleClick() {
          const newParams = new URLSearchParams(searchParams);
          newParams.set("search", searchInput.split(" ").join("-"));
          router.push(`?${newParams.toString()}`);
     }

     return (
          <div className="w-1/3 grid grid-cols-[9fr_1fr] content-center">
               <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="border-1 border-secondary px-4 py-2 rounded-sm"
               ></input>

               <button
                    className="flex items-center justify-center cursor-pointer border-1 px-2"
                    onClick={handleClick}
               >
                    <CiSearch className="size-6" />
               </button>
          </div>
     );
}

export default Search;
