import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputPassword() {
    const {userForm, setUserForm} = useContext(UserFormContext);

    const handleSetValue = (val) => {
        let userFormCopied = JSON.parse(JSON.stringify(userForm));
        userFormCopied.password = val;
        setUserForm(userFormCopied);
    }

    return (
        <>
            <label>
                Password:
                <BottomLineInput value={userForm.password} setValue={handleSetValue}/>
            </label>
            <br/>
        </>
    )
}

export default InputPassword;