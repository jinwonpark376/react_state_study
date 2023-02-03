import React, {useState, useReducer} from 'react';
import InputUsername from "./InputUsername";
import InputPassword from "./InputPassword";
import {UserFormContext, userFormInitialState, userFormReducer} from "./UserFormContext";

function App() {
    // 3. use reducer from your component
    // const [userForm, setUserForm] = useState({
    //     username: "",
    //     password: ""
    // })

    // 2. create reducer function
    const [userForm, dispatch] = useReducer(userFormReducer, userFormInitialState);

    return (
        <div className="App">
            <UserFormContext.Provider value={{userForm, dispatch}}>
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
