import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputPassword() {
    const {userForm, dispatch} = useContext(UserFormContext);

    const handlePasswordChange = (val) => {
        // let userFormCopied = JSON.parse(JSON.stringify(userForm));
        // userFormCopied.password = val;
        // setUserForm(userFormCopied);
        dispatch({
            type: 'password',
            payload: val
        })
    }

    return (
        <>
            <label>
                Password:
                <BottomLineInput value={userForm.password} setValue={handlePasswordChange}/>
            </label>
            <br/>
        </>
    )
}

export default InputPassword;