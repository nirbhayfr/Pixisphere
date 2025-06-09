import {
     CiLocationOn,
     CiMoneyCheck1,
     CiShoppingTag,
     CiStar,
} from "react-icons/ci";
import Button from "../_ui/Button";

function Card({ user }) {
     return (
          <div className="bg-tertiary rounded-lg p-8 space-y-8">
               <div className="grid grid-cols-2 max-nm:grid-cols-1 max-md:grid-cols-2">
                    <img
                         src={user.profilePic}
                         alt={user.name}
                         className="w-full"
                    />
               </div>
               <div className="p-4 space-y-4 w-3/4 max-xl:w-full">
                    <h4 className="text-2xl font-semibold text-primary">
                         {user.name}
                    </h4>

                    <div className="flex items-center justify-between max-nm:flex-col max-nm:items-start max-nm:space-y-4">
                         <div className="flex items-center gap-4">
                              <span>
                                   <CiLocationOn className="size-6" />
                              </span>
                              <p>{user.location}</p>
                         </div>
                         <div className="flex items-center gap-4">
                              <span>
                                   <CiMoneyCheck1 className="size-6" />
                              </span>
                              <p>&#8377;{user.price}</p>
                         </div>
                    </div>

                    <div className="flex items-center gap-4">
                         <span>
                              <CiStar className="size-6" />
                         </span>
                         <p>{user.rating}</p>
                    </div>

                    <div className="flex items-center gap-4">
                         <span>
                              <CiShoppingTag className="size-6" />
                         </span>
                         <p>{user.tags.join(", ")}</p>
                    </div>
                    <Button id={user.id}>View Profile</Button>
               </div>
          </div>
     );
}

export default Card;
