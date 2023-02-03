import React, {useState} from 'react';
import InputUsername from "./InputUsername";
import InputPassword from "./InputPassword";
import {UserFormContext} from "./UserFormContext";

function App() {

    const [userForm, setUserForm] = useState({
        username: "",
        password: ""
    })

    return (
        <div className="App">
            <UserFormContext.Provider value={{userForm, setUserForm}}>
                <form onSubmit={() => alert(`username: ${userForm.username}, password: ${userForm.password}`)}>
                    <InputUsername/>
                    <InputPassword/>
                    <input type="submit" value="Submit"/>
                </form>
            </UserFormContext.Provider>
        </div>
    );
}

export default App;
