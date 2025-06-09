import { changeSort } from "../_store/formSlice";
import { useSelector, useDispatch } from "react-redux";

function FormSort() {
     const { sort } = useSelector((state) => state.form);
     const dispatch = useDispatch();

     return (
          <div className="space-y-4">
               <p className="text-lg uppercase">Sort</p>
               <ul className="space-y-2">
                    <li className="space-x-3">
                         <input
                              type="radio"
                              name="price"
                              id="price"
                              className="size-4"
                              value="price"
                              checked={sort === "price"}
                              onChange={(e) =>
                                   dispatch(changeSort(e.target.value))
                              }
                         />
                         <label htmlFor="price">Price: low to high</label>
                    </li>
                    <li className="space-x-3">
                         <input
                              type="radio"
                              name="sortRating"
                              id="sortRating"
                              className="size-4"
                              value="rating"
                              checked={sort === "rating"}
                              onChange={(e) =>
                                   dispatch(changeSort(e.target.value))
                              }
                         />
                         <label htmlFor="rating">Rating: high to low</label>
                    </li>
                    <li className="space-x-3">
                         <input
                              type="radio"
                              name="recent"
                              id="recent"
                              className="size-4"
                              value="recent"
                              checked={sort === "recent"}
                              onChange={(e) =>
                                   dispatch(changeSort(e.target.value))
                              }
                         />
                         <label htmlFor="recent">Recently added</label>
                    </li>
                    <li className="space-x-3">
                         <input
                              type="radio"
                              name="none"
                              id="none"
                              className="size-4"
                              value=""
                              checked={sort === null}
                              onChange={() => dispatch(changeSort(null))}
                         />
                         <label htmlFor="none">None</label>
                    </li>
               </ul>
          </div>
     );
}

export default FormSort;
