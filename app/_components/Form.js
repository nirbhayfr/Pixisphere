import { IoIosClose } from "react-icons/io";
import Button from "../_ui/Button";

function Form({ close }) {
     return (
          <div className="h-screen w-full transparent backdrop-blur-3xl left-0 top-0 fixed flex justify-center items-center">
               <form
                    action=""
                    className="bg-primary/90 text-secondary w-1/2 h-2/3 grid grid-rows-[auto_auto_1fr_2fr_1fr] grid-cols-1 p-12 gap-4 max-md:p-4 max-md:w-2/3 max-xxs:w-9/10 max-xxs:p-4 max-xxs:h-2/4"
               >
                    <button onClick={close} className="cursor-pointer">
                         <IoIosClose className="size-12" />
                    </button>

                    <h2>Fill the form if u want to ask anything!!</h2>
                    <div className="grid grid-cols-2 gap-6 max-xxs:gap-2">
                         <input
                              type="text"
                              placeholder="Name"
                              className="border-1 border-secondary p-4 text-lg max-xxs:p-2 max-xxs:text-md"
                         />
                         <input
                              type="text"
                              placeholder="Contact"
                              className="border-1 border-secondary p-4 text-lg max-xxs:p-2 max-xxs:text-md"
                         />
                    </div>
                    <input
                         type="text"
                         placeholder="Description"
                         className="border-1 border-secondary p-4 text-lg max-xxs:p-2 max-xxs:text-md"
                    />

                    <Button>Send</Button>
               </form>
          </div>
     );
}

export default Form;
