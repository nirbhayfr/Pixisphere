"use client";

import { CiStar } from "react-icons/ci";

function Review({ review }) {
     return (
          <div className="space-y-2 border-b-1 p-2">
               <p className="text-lg font-medium">{review.name}</p>
               <div className="flex items-center gap-4">
                    <span>
                         <CiStar className="size-6" />
                    </span>
                    <p>{review.rating}</p>
               </div>
               <p className="italic">{review.comment}</p>
               <p>Date: {review.date}</p>
          </div>
     );
}

export default Review;
