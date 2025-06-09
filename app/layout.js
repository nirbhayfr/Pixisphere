import { Roboto_Condensed } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ClientProvider from "./_components/ClientProvider";

export const robotoCondensed = Roboto_Condensed({
     subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
     display: "swap",
});

export const poppins = Poppins({
     subsets: ["latin"],
     weight: ["200", "300", "400", "500", "600", "700"],
     display: "swap",
});

export const metadata = {
     title: "Pixisphere",
     description: "An app to explore photographers and their work",
};

export default async function RootLayout({ children }) {
     // const res = await fetch("https://dummyjson.com/c/1f7a-3798-41c0-aa8f");
     // const data = await res.json();
     // console.log(data);
     return (
          <html lang="en">
               <body
                    className={`${poppins.className} grid grid-rows-[auto_1fr_auto] bg-primary relative`}
               >
                    <Header />
                    <main className="bg-secondary grid grid-cols-[1fr_3fr] p-4 gap-x-4 max-sm:grid-cols-1 max-sm:gap-y-4 max-sm:grid-rows-[auto_auto]">
                         <ClientProvider>{children}</ClientProvider>
                    </main>
                    <Footer />
               </body>
          </html>
     );
}
