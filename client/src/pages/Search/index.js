import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import SideBar from "../../components/SideBar/sidebar"
import "./search.css"

function Search() {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        API.getAllUsers().then(res => {
            console.log(res)
            setUsers(res.data)
        })
    }, [])
    function searchUsers() {
        API.getUsers(query).then(res => {
            console.log(res)
            setUsers(res.data)
        }).catch(err => console.log(err))
    }
    return (
        <div className="search">
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchUsers}>Search Users</button>
            {users.map(user => (
                <h1>{user.firstName}</h1>
            ))}
            <SideBar />

        </div>



    )

}

export default Search;