import { GETProps} from './types';

const GET = ({ requestUrl }: GETProps) => {

    const API_HOST = import.meta.env.VITE_APP_API_HOST ?? "http://localhost:4000";

    const url = new URL(`${API_HOST}${requestUrl}`);

    const headers = new Headers();

    headers.append("content-type", "application/json");
    headers.append("mode", "cors");

    const requestData = {
        headers,
        method: "GET",
    };

    return fetch(url, requestData);
};

export default GET;