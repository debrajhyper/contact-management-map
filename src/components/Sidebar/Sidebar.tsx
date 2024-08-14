import { Link } from "react-router-dom";
import { SidebarMenu } from "./data";

export function Sidebar() {
    return (
        <div className="fixed w-24 md:w-52 h-screen flex flex-col justify-start items-start bg-neutral-800 pt-8 md:pt-16 pb-8 px-2.5 md:px-4">
            {
                SidebarMenu.map((menu, index) => {
                    const { name, Icon, path } = menu;
                    return (
                        <Link to={path} key={index} className="flex flex-col md:flex-row justify-start items-start md:items-center gap-0 md:gap-2 py-2 hover:text-white w-full">
                            <Icon size={26} />
                            <h4 className="font-semibold text-md md:text-lg">{name}</h4>
                        </Link>
                    )
                })
            }
            <span className="text-neutral-700 text-xl md:text-4xl font-extrabold text-end mt-auto">Sidebar</span>
        </div>
    )
}
