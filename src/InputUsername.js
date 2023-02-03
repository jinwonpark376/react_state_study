import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputUsername() {
    const {userForm, dispatch} = useContext(UserFormContext);

    const handleUsernameChange = (val) => {
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