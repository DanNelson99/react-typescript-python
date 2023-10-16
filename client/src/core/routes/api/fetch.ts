import { useEffect, useState } from 'react';
import { requestStatusConstants } from "../../constants/globalConstants";
import GET from "./get";


import { GETProps, FetchState } from './types';

// eslint-disable-next-line 
export const useGET = (defaultValues: any) => {

    const [State, setState] = useState<FetchState>({
        requestUrl: null,
        timeStamp: null,
        // eslint-disable-next-line
        data: defaultValues,
        status: requestStatusConstants.PENDING
    });

    const triggerGetData = (requestUrl: GETProps) => {
        if (requestUrl) {
            setState({
                requestUrl,
                timeStamp: new Date().getTime(),
                // eslint-disable-next-line 
                data: State.data,
                status: requestStatusConstants.PENDING
            });
        }
    };

    useEffect(() => {

        let isMounted = true;

        const getData = async (requestUrl: GETProps) => {

            if (State.status !== requestStatusConstants.PENDING) {
                setState({ ...State, status: requestStatusConstants.PENDING });
            }

            await GET(requestUrl)
                .then(async (response) => {
                    if (isMounted && response.status === 401) {
                        isMounted = false;
                        setState({ ...State, status: requestStatusConstants.UNAUTHORIZED, data: null });
                    } else if (isMounted && response.status >= 200 && response.status < 300) {

                        await response.json().then((data) => {
                            // eslint-disable-next-line 
                            setState({ ...State, status: response.status, data });
                        });
                    } else if (isMounted) {
                        setState({ ...State, status: response.status, data: null });
                    }

                }).catch((error) => {
                    console.log(error);
                    setState({ ...State, status: requestStatusConstants.FAILED });
                });

        };

        const { requestUrl } = State;

        if (requestUrl) {
            getData(requestUrl).catch((error) => { console.log(error) });
        }

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line
    }, [State.timeStamp]);

    return [State.data, State.status, triggerGetData] as const;
};
