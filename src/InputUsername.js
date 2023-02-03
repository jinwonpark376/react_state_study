import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputUsername() {
    const {userForm, setUserForm} = useContext(UserFormContext);

    const handleSetValue = (val) => {
        let userFormCopied = JSON.parse(JSON.stringify(userForm));
        userFormCopied.username = val;
        setUserForm(userFormCopied);
    }

    return (
        <>
            <label>
                Name:
                <BottomLineInput value={userForm.username} setValue={handleSetValue}/>
            </label>
            <br/>
        </>
    )
}

export default InputUsername;