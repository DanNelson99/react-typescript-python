import { ReactNode } from 'react';

export enum GlobalActionType {
    CHANGE_MAX_APP_SCREEN_WIDTH = "CHANGE_MAX_APP_SCREEN_WIDTH",
}

export type Payload = {
    screenSize: "max-w-none" | "mx-auto max-w-screen-xl" | "mx-auto max-w-screen-2xl",
}

export interface GlobalAction {
    type: GlobalActionType
    payload: Payload
}

export interface GlobalState {
    maxScreenWidth: string,
}

export interface GlobalStateProviderProps {
    children: ReactNode;
}
