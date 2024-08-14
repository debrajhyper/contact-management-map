import { GRAPH_LINK, HOME_PATH } from "@Routes";
import { IconAddressBook, IconGraph } from "@tabler/icons-react";

export const SidebarMenu = [
    {
        name: "Contact",
        Icon: IconAddressBook,
        path: HOME_PATH
    },
    {
        name: "Charts & Maps",
        Icon: IconGraph,
        path: GRAPH_LINK
    }
]