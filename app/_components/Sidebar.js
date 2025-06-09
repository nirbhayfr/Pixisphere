"use client";

import FormSliders from "../_ui/FormSliders";
import FormStyles from "../_ui/FormStyles";
import FormCity from "../_ui/FormCity";
import FormSort from "../_ui/FormSort";
import FormRating from "../_ui/FormRating";
import { useDispatch } from "react-redux";
import { reset } from "../_store/formSlice";

function Sidebar() {
     const dispatch = useDispatch();
     return (
          <div className="bg-tertiary rounded-sm p-8 space-y-6 text-primary text-sm max-sm:row-start-2">
               <div className="flex items-center justify-between">
                    <h3 className="uppercase text-xl">Filters</h3>
                    <button
                         className="text-xs border-primary border-1 px-3 py-1 cursor-pointer"
                         onClick={() => dispatch(reset())}
                    >
                         reset
                    </button>
               </div>
               <form action="" className="space-y-4">
                    <FormSliders />

                    <FormRating />

                    <FormStyles />

                    <FormCity />

                    <FormSort />
               </form>
          </div>
     );
}

export default Sidebar;
