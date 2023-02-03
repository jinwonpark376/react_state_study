import React, {useContext} from 'react';
import BottomLineInput from "./BottomLineInput";
import {UserFormContext} from "./UserFormContext";

function InputName() {
    const {userForm, setUserForm} = useContext(UserFormContext);

    const handleSetValue = (val) => {
        let userFormCopied = JSON.parse(JSON.stringify(userForm));
        userFormCopied.name = val;
        setUserForm(userFormCopied);
    }

    return (
        <>
            <label>
                Name:
                <BottomLineInput value={userForm.name} setValue={handleSetValue}/>
            </label>
            <br/>
        </>
    )
}

export default InputName;