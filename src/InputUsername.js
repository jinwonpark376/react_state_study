import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputUsername() {
    const {userForm, dispatch} = useContext(UserFormContext);

    const handleUsernameChange = (val) => {
        // let userFormCopied = JSON.parse(JSON.stringify(userForm));
        // userFormCopied.username = val;
        // setUserForm(userFormCopied);

        //1. replace state setting function to dispatch action
        dispatch({
            type: 'username',
            payload: val
        })
    }

    return (
        <>
            <label>
                Name:
                <BottomLineInput value={userForm.username} setValue={handleUsernameChange}/>
            </label>
            <br/>
        </>
    )
}

export default InputUsername;