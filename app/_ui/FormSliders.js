import { useDispatch, useSelector } from "react-redux";
import { changeMaxPrice, changeMinPrice } from "../_store/formSlice";

function FormSliders() {
     const { maxPrice, minPrice } = useSelector((state) => state.form);
     const dispatch = useDispatch();
     return (
          <div className="space-y-3">
               <p className="text-lg uppercase">Price Range</p>
               <p>{`${minPrice}-${maxPrice}`}</p>
               <div className="w-full space-x-3 flex justify-between items-center">
                    <label htmlFor="minPrice">Min</label>
                    <div className="space-x-2">
                         <input
                              type="range"
                              name="minPrice"
                              id="minPrice"
                              min={5000}
                              max={8000}
                              step={1000}
                              value={minPrice}
                              onChange={(e) =>
                                   dispatch(changeMinPrice(e.target.value))
                              }
                              className="bg-secondary rounded-lg appearance-none cursor-pointer h-2"
                         />
                    </div>
               </div>
               <div className="w-full space-x-3 flex justify-between items-center">
                    <label htmlFor="maxPrice">Max</label>
                    <div className="space-x-2">
                         <input
                              type="range"
                              name="maxPrice"
                              id="maxPrice"
                              min={10000}
                              max={20000}
                              step={1000}
                              value={maxPrice}
                              onChange={(e) =>
                                   dispatch(changeMaxPrice(e.target.value))
                              }
                              className="bg-secondary rounded-lg appearance-none cursor-pointer h-2"
                         />
                    </div>
               </div>
          </div>
     );
}

export default FormSliders;
