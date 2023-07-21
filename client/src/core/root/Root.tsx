import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import AppFrame from "../../common/frames/AppFrame";

const Root = () => {
    return (
        <>
            <Header />
            <AppFrame>
                <Outlet />
            </AppFrame >
        </>
    )
};

export default Root;