import React, {useEffect, useState} from 'react';
import axios from "axios";

function ListNotes(props) {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [notes]);

    return (
        <div></div>
    );
}

export default ListNotes;