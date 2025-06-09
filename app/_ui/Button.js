import Link from "next/link";
import { redirect } from "next/navigation";

function Button({ children, id }) {
     return (
          <button className="px-4 py-2 bg-primary text-secondary mt-8 cursor-pointer">
               <Link href={`/home/${id}`}>{children}</Link>
          </button>
     );
}

export default Button;
