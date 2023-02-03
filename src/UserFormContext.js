import {createContext} from "react";

export const UserFormContext = createContext({
    userForm: {
        name: "",
        phoneNumber: "",
        age: 0
    },
    setUserForm: (userForm) => {
    }
});