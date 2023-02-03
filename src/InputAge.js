import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputAge() {
    const {userForm, setUserForm} = useContext(UserFormContext);

    const handleSetValue = (val) => {
        let userFormCopied = JSON.parse(JSON.stringify(userForm));
        userFormCopied.age = val;
        setUserForm(userFormCopied);
    }

    return (
        <>
            <label>
                Age:
                <BottomLineInput value={userForm.age} setValue={handleSetValue}/>
            </label>
            <br/>
        </>
    )
}

export default InputAge;