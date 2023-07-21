import { ReactNode } from "react";

interface NavBarProps {
    children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {

    return (
        <div className="bg-sky-400 h-16">
            {children}
        </div>
    );

};

export default NavBar