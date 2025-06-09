import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../_store/formSlice";

function FormCity() {
     const { city } = useSelector((state) => state.form);
     const dispatch = useDispatch();

     return (
          <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:space-y-4">
               <label htmlFor="cities" className="text-lg uppercase">
                    Cities
               </label>
               <select
                    name="cities"
                    id="cities"
                    className="border-1 border-primary px-4 py-1"
                    value={city}
                    onChange={(e) => dispatch(changeCity(e.target.value))}
               >
                    <option value="all">All</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
               </select>
          </div>
     );
}

export default FormCity;
