"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "../_components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../_store/userSlice";
import { useSearchParams } from "next/navigation";
import Loader from "../_ui/Loader";

function Cards() {
     const searchParams = useSearchParams();
     const search = searchParams.get("search");
     const dispatch = useDispatch();
     const [displayIndex, setDisplayIndex] = useState(4);
     const { minPrice, maxPrice, rating, styles, city, sort } = useSelector(
          (state) => state.form
     );

     //Handler
     function handleClick() {
          setDisplayIndex((index) => index + 4);
     }

     //Fetching Data
     const { isPending, error, data } = useQuery({
          queryKey: ["users"],
          queryFn: () =>
               fetch("https://dummyjson.com/c/5ac5-9e49-42c9-919f").then(
                    (res) => res.json()
               ),
     });

     useEffect(
          function () {
               dispatch(updateUsers(data));
          },
          [data, dispatch]
     );
     //Error Handling and data uploading
     if (isPending) return <Loader />;
     if (error) throw new Error("Failed to fetch data.");

     //Filters
     let filterData = data.photographers;

     //Search
     if (search !== null) {
          let searchData = filterData.map((i) => JSON.stringify(i));
          searchData = search
               .split("-")
               .map((param) =>
                    searchData.filter((i) =>
                         i.toLowerCase().includes(param.toLowerCase())
                    )
               );
          searchData = searchData.flat();
          searchData = searchData.map((i) => JSON.parse(i));
          filterData = searchData;
     }

     //Price Filters
     filterData = filterData.filter(
          (i) => i.price >= minPrice && i.price <= maxPrice
     );

     //Rating Filter
     filterData = filterData.filter((i) => i.rating >= rating);

     //Style filters
     if (styles.traditional === false)
          filterData = filterData.filter(
               (i) => !i.styles.includes("Traditional")
          );

     if (styles.candid === false)
          filterData = filterData.filter((i) => !i.styles.includes("Candid"));

     if (styles.studio === false)
          filterData = filterData.filter((i) => !i.styles.includes("Studio"));

     if (styles.outdoor === false)
          filterData = filterData.filter((i) => !i.styles.includes("Outdoor"));

     //City Filter
     if (city !== "all")
          filterData = filterData.filter((i) => i.location === city);

     //Sorting
     if (sort === "price")
          filterData = filterData.sort((a, b) => a.price - b.price);
     if (sort === "rating")
          filterData = filterData.sort((a, b) => b.rating - a.rating);
     if (sort === "recent") filterData = filterData.sort((a, b) => b.id - a.id);

     const displayData = filterData.slice(0, displayIndex);

     return (
          <>
               {displayData.map((user) => (
                    <Card user={user} key={user.id} />
               ))}
               {filterData.length > displayIndex && (
                    <button
                         className="flex w-full items-center justify-center col-span-full bg-primary text-secondary py-2 text-lg cursor-pointer hover:bg-primary/90 transition-all duration-300"
                         onClick={handleClick}
                    >
                         Load More
                    </button>
               )}
          </>
     );
}

export default Cards;
