import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {

    const [users, setUsers] = useState([]);
    const [userList, setUserList ] = useState([]);

    return (
        <UserContext.Provider value={{ value:[users, setUsers], value2:[ userList , setUserList]}}>
        {props.children}
        </UserContext.Provider>
    )
}