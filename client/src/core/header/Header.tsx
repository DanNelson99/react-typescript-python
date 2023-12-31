import NavBar from "../../common/navbar/NavBar";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import AdjustmentsVerticalIcon from "@heroicons/react/24/solid/AdjustmentsVerticalIcon";
import IdentificationIcon from "@heroicons/react/24/solid/IdentificationIcon";
import Tab from "../../common/tab/Tab";

import { routes } from "../types/globalTypes";

const tabs = [
    {
        id: "tab_home",
        name: "Home",
        icon: HomeIcon,
        route: routes.HOME
    },
    {
        id: "tab_mapper",
        name: "Mapper",
        icon: HomeIcon,
        route: routes.MAPPER
    },
    {
        id: "tab_about",
        name: "About",
        icon: IdentificationIcon,
        route: routes.ABOUT
    },
    {
        id: "tab_settings",
        name: "Settings",
        icon: AdjustmentsVerticalIcon,
        route: routes.SETTINGS
    }
];

const Header = () => {
    return (
        <NavBar>
            <div className="flex flex-row">
                {tabs.map(tab => {
                    return <Tab key={tab.id} StartIcon={tab.icon} label={tab.name} route={tab.route} />
                })}
            </div>

            <div>
                Workspace
            </div>

            <div className="proses mr-4">
                RESOURCE MAPPER
            </div>
        </NavBar>
    );
};

export default Header;