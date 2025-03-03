import React, {useEffect, useState} from 'react';
import axios from "axios";

function DetailNote(props) {
    const note_id = props.note_id
    const [note, setNote] = useState({})

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/' + note_id + '/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setNote(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [note]);

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
}

export default DetailNote;