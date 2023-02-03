import {createContext} from "react";

export const UserFormContext = createContext({
    userForm: {
        username: "",
        password: ""
    },
    setUserForm: (userForm) => {}
});


