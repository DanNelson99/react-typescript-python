// This manages global state as one should be split to be more readable
import { GlobalAction, GlobalState, GlobalActionType } from "./types";

export const reducer = (state: GlobalState, action: GlobalAction) => {
    switch (action.type) {
      case GlobalActionType.CHANGE_MAX_APP_SCREEN_WIDTH:
        return {
          ...state,
          screenSize: action.payload.screenSize
        };
    
      default:
        return state;
    }
};