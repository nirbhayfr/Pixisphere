"use client";

import { CiShoppingTag } from "react-icons/ci";
import { MdStyle } from "react-icons/md";
import { useSelector } from "react-redux";
import Review from "../_ui/Review";
import { useState } from "react";
import Form from "./Form";

function ProfileCard({ id }) {
     const [isOpen, setIsOpen] = useState(false);
     const { users } = useSelector((state) => state.user);
     const profile = users.photographers?.find(
          (user) => user.id === parseInt(id)
     );

     if (!profile) return null;

     function openForm() {
          setIsOpen(() => true);
     }

     function closeForm() {
          setIsOpen(() => false);
     }
     return (
          <div className="p-8 grid grid-cols-[1fr_3fr] gap-8 max-md:grid-cols-1 max-md:grid-rows-[auto_1fr]">
               <img
                    src={profile.profilePic}
                    alt={profile.name}
                    className="w-full"
               />

               <div className="space-y-6 text-primary">
                    <h4 className="text-5xl font-medium">{profile.name}</h4>
                    <p className="italic text-xl font-light max-md:text-lg">
                         &quot;{profile.bio}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                         <span>
                              <MdStyle className="size-6" />
                         </span>
                         <p>{profile.styles.join(", ")}</p>
                    </div>
                    <div className="flex items-center gap-4">
                         <span>
                              <CiShoppingTag className="size-6" />
                         </span>
                         <p>{profile.tags.join(", ")}</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-6 max-md:grid-cols-1 max-md:grid-rows-[auto_1fr_1fr]">
                         <h5 className="col-span-full text-2xl font-semibold">
                              Image Gallery
                         </h5>
                         <img
                              src={profile.portfolio[0]}
                              alt="portfolio"
                              className="rounded-lg"
                         />

                         <img
                              src={profile.portfolio[1]}
                              alt="portfolio"
                              className="rounded-lg"
                         />
                    </div>

                    {profile.reviews && (
                         <div className="space-y-4">
                              <h5 className="col-span-full text-2xl font-semibold">
                                   Reviews
                              </h5>
                              {profile.reviews.map((data) => (
                                   <Review review={data} key={profile.name} />
                              ))}
                         </div>
                    )}

                    <button
                         onClick={openForm}
                         className="underline cursor-pointer hover:text-primary/90 transition-all duration-300"
                    >
                         Send Inquiry
                    </button>

                    {isOpen && <Form close={closeForm} />}
               </div>
          </div>
     );
}

export default ProfileCard;
