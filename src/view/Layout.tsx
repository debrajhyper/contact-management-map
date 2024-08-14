import { ReactNode } from 'react';
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppStore } from "@Services";
import { Sidebar } from '@Components';

type Layout = {
    children: ReactNode
};

const queryClient = new QueryClient();

export function Layout({ children }: Layout) {
    return (
        <Provider store={AppStore}>
            <QueryClientProvider client={queryClient}>
                <div className='relative flex flex-row justify-start items-start'>
                    <Sidebar />
                    <main className='ml-24 md:ml-52 w-full h-screen flex-1 p-10 px-6 sm:px-10 md:px-12 lg:px-16'>
                        {children}
                    </main>
                </div>
            </QueryClientProvider>
        </Provider>
    )
}
