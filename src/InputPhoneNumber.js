import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputPhoneNumber() {
    const {userForm, setUserForm} = useContext(UserFormContext);

    const handleSetValue = (val) => {
        let userFormCopied = JSON.parse(JSON.stringify(userForm));
        userFormCopied.phoneNumber = val;
        setUserForm(userFormCopied);
    }

    return (
        <>
            <label>
                PhoneNumber:
                <BottomLineInput value={userForm.phoneNumber} setValue={handleSetValue}/>
            </label>
            <br/>
        </>
    )
}

export default InputPhoneNumber;