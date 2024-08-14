import { ReactNode } from 'react';
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppStore } from "@Services";
import { Sidebar } from '@Components';

// Defining the Layout component type with a single property 'children' of type ReactNode
type Layout = {
    children: ReactNode
};

// Creating a new instance of the QueryClient class
const queryClient = new QueryClient();

/**
 * The Layout component is the main layout component for the application.
 * It wraps the entire application with the necessary providers and components.
 * It takes a single property 'children' which is the content to be rendered inside the layout.
 * The Layout component renders the Sidebar component and the main content inside the 'main' element.
 * The Sidebar component is rendered on the left side of the layout and the main content is rendered on the right side.
 * The layout uses tailwindcss classes to style the layout elements.
 * The layout is responsive and adjusts its width based on the screen size.
 * The layout also includes some padding and margin to create some space around the content.
 * The layout is wrapped inside the Provider component from react-redux to provide the Redux store to the application.
 * The layout is wrapped inside the QueryClientProvider component from react-query to provide the query client to the application.
 * The layout is exported as a named export from the @View module.
 * @param {Layout} props - The props object that contains the 'children' property.
 * @returns {JSX.Element} - The JSX element that represents the layout component.
 */
export function Layout({ children }: Layout): JSX.Element {
    {/* Wrapping the layout inside the Provider component from react-redux */ }
    return (
        <Provider store={AppStore}>
            {/* Wrapping the layout inside the QueryClientProvider component from react-query */}
            <QueryClientProvider client={queryClient}>
                {/* Creating a flex container for the layout */}
                <div className='relative flex flex-row justify-start items-start'>
                    {/* Rendering the Sidebar component on the left side of the layout */}
                    <Sidebar />
                    <main className='ml-24 md:ml-52 w-full h-screen flex-1 p-10 px-6 sm:px-10 md:px-12 lg:px-16'> {/* Rendering the main content inside the 'main' element on the right side of the layout */}
                        {/* Rendering the 'children' inside the main content */}
                        {children}
                    </main>
                </div>
            </QueryClientProvider>
        </Provider>
    )
}