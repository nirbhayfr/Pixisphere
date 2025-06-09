import { useDispatch, useSelector } from "react-redux";
import { changeRating } from "../_store/formSlice";

function FormRating() {
     const { rating } = useSelector((state) => state.form);
     const dispatch = useDispatch();

     return (
          <div className="flex items-center justify-between">
               <label htmlFor="rating" className="text-lg uppercase">
                    Rating
               </label>
               <select
                    name="rating"
                    id="rating"
                    className="border-1 border-primary px-4 py-1"
                    value={rating}
                    onChange={(e) => dispatch(changeRating(e.target.value))}
               >
                    <option value="5">5</option>
                    <option value="4">4+</option>
                    <option value="3">3+</option>
                    <option value="1">All</option>
               </select>
          </div>
     );
}

export default FormRating;
