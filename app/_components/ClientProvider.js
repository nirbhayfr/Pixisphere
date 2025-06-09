"use client";

import { Provider } from "react-redux";
import { store } from "../_store/store";
import Sidebar from "./Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function ClientProvider({ children }) {
     return (
          <Provider store={store}>
               <QueryClientProvider client={queryClient}>
                    <Sidebar />
                    {children}
               </QueryClientProvider>
          </Provider>
     );
}

export default ClientProvider;
