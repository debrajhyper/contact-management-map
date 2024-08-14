import { HOME_PATH } from "@Routes";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="not_found_page w-full h-full py-16 px-8 flex flex-col flex-wrap justify-center items-center">
            <h1 className="error text-9xl text-[#008B62] ">404</h1>
            <div className="page my-8 text-xl font-semibold text-neutral-700">Ooops!!! The page you are looking for is not found</div>
            <Link to={HOME_PATH} className="back-home inline-block border-2 border-neutral-800 text-white uppercase font-semibold py-3 px-4 transition-all drop-shadow-md bg-neutral-800 rounded-md hover:bg-neutral-900 hover:border-neutral-900">Back to home</Link>
        </div>
    )
}
