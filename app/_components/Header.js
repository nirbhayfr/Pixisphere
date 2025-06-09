import { Suspense } from "react";
import { robotoCondensed } from "../layout";
import Search from "./Search";
import Loader from "../_ui/Loader";

function Header() {
     return (
          <header className="flex items-center justify-between p-4 text-secondary max-xxs:flex-col max-xxs:items-start max-xxs:gap-y-4">
               <h1
                    className={`${robotoCondensed.className} font-normal text-3xl uppercase max-xxs:text-2xl`}
               >
                    Pixisphere
               </h1>
               <div>
                    <Suspense fallback={<Loader />}>
                         <Search />
                    </Suspense>
               </div>
               <p className="max-sm:hidden">Nirbhay</p>
          </header>
     );
}

export default Header;
