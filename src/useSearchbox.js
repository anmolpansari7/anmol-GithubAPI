import { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { UserContext } from './UserContext';

function useSearchbox(query) {
    const { value, value2 } = useContext(UserContext);
    const [users, setUsers] = value;


    useEffect(() => {

        let cancel;
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${query}/repos`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then( res => {
            setUsers(res.data);

        }).then(
            console.log(users)
        )
        .catch(e => {
            if(axios.isCancel(e)) return

        })

        return () => cancel()

    }, [query])

    return null
}

export default useSearchbox
