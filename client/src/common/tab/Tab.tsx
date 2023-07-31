import { ElementType, Dispatch, SetStateAction } from 'react';


interface TabProps {
    label: string
    StartIcon?: ElementType
    EndIcon?: ElementType
    selectedRoute?: string
    route: string
    setSelectedRoute: Dispatch<SetStateAction<string>>
}

const Tab = ({ label, StartIcon, EndIcon, selectedRoute, route, setSelectedRoute }: TabProps) => {
    console.log(route, selectedRoute);
    const selected = selectedRoute === route ? 'border-black border-b-2 border-solid' : '';
   

    const ChangeRoute = () => {
        setSelectedRoute(route);
    };

    return (
        <div onClick={ChangeRoute} className={`flex flex-row content-center cursor-pointer w-min px-6 py-4 ${selected}`}>
            {StartIcon &&
                <StartIcon className='w-4' />
            }

            {label &&
                <div className='prose mx-2'>
                    {label}
                </div>
            }

            {EndIcon &&
                <EndIcon className='w-4' />
            }
        </div>
    );
};

Tab.defaultprops = {
    isSelected: false
}

export default Tab;