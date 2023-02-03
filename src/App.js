import React, {useState} from 'react';
import InputName from "./InputName";
import InputPhoneNumber from "./InputPhoneNumber";
import InputAge from "./InputAge";
import {UserFormContext} from "./UserFormContext";

function App() {
    const [userForm, setUserForm] = useState({
        name: "",
        phoneNumber: "",
        age: 0
    });

    const value = {userForm, setUserForm};

    return (
        <div className="App">
            <UserFormContext.Provider value={value}>
                <form onSubmit={() => alert(`name: ${userForm.name}, phoneNumber: ${userForm.phoneNumber}, age: ${userForm.age}`)}>
                    <InputName />
                    <InputPhoneNumber />
                    <InputAge />
                    <input type="submit" value="Submit"/>
                </form>
            </UserFormContext.Provider>
        </div>
    );
}

export default App;
