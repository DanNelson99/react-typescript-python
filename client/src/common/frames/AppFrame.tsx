import { ReactNode } from 'react';

interface AppFrameProps {
    children: ReactNode;
    maxScreenWidth: string;
}

const AppFrame = ({ children, maxScreenWidth }: AppFrameProps) => {
    return (
        <div className={`h-full p-4 ${maxScreenWidth}`}>
            {children}
        </div>
    );
};

AppFrame.defaultProps = {
    maxScreenWidth: 'mx-auto max-w-screen-xl',
};

export default AppFrame;