import { ErrorBoundary } from "react-error-boundary";

import Error from "../core/error/Error";

const Home = () => {

    return (
        <ErrorBoundary fallback={<Error />}>
            <div className="pose">
                Under construction

            </div>
        </ErrorBoundary>
    )
};

export default Home;