import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Header from "../header/Header";
import AppFrame from "../../common/frames/AppFrame";
import Error from "../error/Error";

const Root = () => {
    return (
        <ErrorBoundary fallback={<Error />}>
            <Header />
            <AppFrame>
                <Outlet />
            </AppFrame >
        </ErrorBoundary>
    )
};

export default Root;