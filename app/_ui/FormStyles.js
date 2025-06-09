import { useDispatch, useSelector } from "react-redux";
import {
     changeTraditional,
     changeCandid,
     changeStudio,
     changeOutdoor,
} from "../_store/formSlice";

function FormStyles() {
     const { styles } = useSelector((state) => state.form);
     const dispatch = useDispatch();

     return (
          <div>
               <p className="text-lg uppercase">Styles</p>
               <ul>
                    <li className="flex items-center justify-between">
                         <label htmlFor="traditional">Traditional</label>
                         <input
                              type="checkbox"
                              name="traditional"
                              id="traditional"
                              className="size-4"
                              checked={styles.traditional}
                              onChange={(e) =>
                                   dispatch(changeTraditional(e.target.checked))
                              }
                         />
                    </li>
                    <li className="flex items-center justify-between">
                         <label htmlFor="candid">Candid</label>
                         <input
                              type="checkbox"
                              name="candid"
                              id="candid"
                              className="size-4"
                              checked={styles.candid}
                              onChange={(e) =>
                                   dispatch(changeCandid(e.target.checked))
                              }
                         />
                    </li>
                    <li className="flex items-center justify-between">
                         <label htmlFor="studio">Studio</label>
                         <input
                              type="checkbox"
                              name="studio"
                              id="studio"
                              className="size-4"
                              checked={styles.studio}
                              onChange={(e) =>
                                   dispatch(changeStudio(e.target.checked))
                              }
                         />
                    </li>
                    <li className="flex items-center justify-between">
                         <label htmlFor="outdoor">Outdoor</label>
                         <input
                              type="checkbox"
                              name="outdoor"
                              id="outdoor"
                              className="size-4"
                              checked={styles.outdoor}
                              onChange={(e) =>
                                   dispatch(changeOutdoor(e.target.checked))
                              }
                         />
                    </li>
               </ul>
          </div>
     );
}

export default FormStyles;
