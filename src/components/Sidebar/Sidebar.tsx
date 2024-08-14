import { Link } from "react-router-dom";
import { SidebarMenu } from "./data";

/**
 * Sidebar component
 * Renders a sidebar with a list of menu items and a title.
 * The menu items are generated from the SidebarMenu data.
 * The component is fixed to the screen and has a width of 24 units on smaller screens,
 * and 52 units on larger screens. The height is set to fill the screen.
 * The component uses tailwindcss classes to style the sidebar.
 */
export function Sidebar() {
    return (
        <div className="fixed w-24 md:w-52 h-screen flex flex-col justify-start items-start bg-neutral-800 pt-8 md:pt-16 pb-8 px-2.5 md:px-4">
            {/* Map over the SidebarMenu data to generate menu items */}
            {SidebarMenu.map((menu, index) => {
                const { name, Icon, path } = menu;
                return (
                    <Link to={path} key={index} className="flex flex-col md:flex-row justify-start items-start md:items-center gap-0 md:gap-2 py-2 hover:text-white w-full">
                        {/* Render the Icon component for the menu item */}
                        <Icon size={26} />
                        {/* Render the name of the menu item */}
                        <h4 className="font-semibold text-md md:text-lg">{name}</h4>
                    </Link>
                )
            })}
            {/* Render the title of the sidebar */}
            <span className="text-neutral-700 text-xl md:text-4xl font-extrabold text-end mt-auto">Sidebar</span>
        </div>
    )
}