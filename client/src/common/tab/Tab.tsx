import { ElementType } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

interface TabProps {
    label: string
    StartIcon?: ElementType
    EndIcon?: ElementType
    route: string
}

const Tab = ({ label, StartIcon, EndIcon, route }: TabProps) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const selected = pathname === route ? "border-black border-b-2 border-solid" : "";


    const ChangeRoute = () => {
        navigate(route);
    };

    return (
        <div onClick={ChangeRoute} className={`flex flex-row content-center cursor-pointer w-min px-6 py-4 ${selected}`}>
            {StartIcon &&
                <StartIcon className="w-4" />
            }

            {label &&
                <div className="prose mx-2">
                    {label}
                </div>
            }

            {EndIcon &&
                <EndIcon className="w-4" />
            }
        </div>
    );
};

Tab.defaultprops = {
    isSelected: false
}

export default Tab;