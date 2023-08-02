import { ReactNode } from "react";

interface NavBarProps {
    children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {

    return (
        <div className="bg-primary flex flex-row items-center justify-between">
            {children}
        </div>
    );

};

export default NavBar