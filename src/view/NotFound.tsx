import { HOME_PATH } from "@Routes";
import { Link } from "react-router-dom";

/**
 * This function creates the NotFound component.
 * It displays a 404 error page when a user navigates to a non-existent page.
 * The component contains a heading, a message, and a link to navigate back to the home page.
 * @returns {JSX.Element} The NotFound component.
 */
export function NotFound() {
    {/* Container for the NotFound component */ }
    return (
        <div className="not_found_page w-full h-full py-16 px-8 flex flex-col flex-wrap justify-center items-center">
            {/* Heading with the error code */}
            <h1 className="error text-8xl md:text-9xl text-[#008B62]">404</h1>
            {/* Message indicating that the page was not found */}
            <div className="page my-8 text-xl font-semibold text-neutral-700">
                Ooops!!! The page you are looking for is not found
            </div>
            {/* Link to navigate back to the home page */}
            <Link to={HOME_PATH} className="back-home inline-block border-2 border-neutral-800 text-white text-sm md:text-md uppercase font-semibold py-3 px-4 transition-all drop-shadow-md bg-neutral-800 rounded-md hover:bg-neutral-900 hover:border-neutral-900">
                Back to home
            </Link>
        </div>
    )
}