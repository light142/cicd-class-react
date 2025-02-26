import React, {useState} from 'react';
import axios from "axios";

function CreateNote(props) {
    //  "title": "Note 4",
    // "content": "this is my note 4",
    // "user": 1
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user, setUser] = useState(1);

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleContentChange(e) {
        setContent(e.target.value)
    }

    function createNote() {

        let data = JSON.stringify({
            "title": title,
            "content": content,
            "user": 1
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>
            <h1>Create Note</h1>
            <p>Title: <input type="text" onChange={handleTitleChange}/></p>
            <p>Content:<textarea onChange={handleContentChange}></textarea></p>

            <button onClick={createNote}>Create Note</button>
        </div>
    );
}

export default CreateNote;