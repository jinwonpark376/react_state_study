import {createContext} from "react";
import produce from "immer";

export const UserFormContext = createContext(null);

export const userFormInitialState = {
    username: "",
    password: ""
};

export const userFormReducer = produce((draft, action) => {
    switch (action.type) {
        case 'username':
            draft.username = action.payload;
            break;
        case 'password':
            draft.password = action.payload;
            break;
        default:
            break;
    }
});
