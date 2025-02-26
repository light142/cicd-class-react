import React, {useState} from 'react';
import app from "../App";

function SecondComponent(props) {
    const [my_age, setMy_age] = useState(46);
    const [message, setMessage] = useState("")

    function age_handler(e)   {
        setMy_age(e.target.value)
    }

    function getMessage() {
        if (my_age > 40) {
            setMessage("You are old")
        }else
        {
            setMessage("You are not old")
        }
    }

    return (
        <div>
            <h1>Second Component This is my name:
                <span>{props.my_name}</span>
            </h1>
            <p>My age: <span>{my_age}</span></p>
            <input type="text" onChange={age_handler} />
            <p>{message}</p>
            <button onClick={getMessage}>Get Message</button>
        </div>
    );
}

export default SecondComponent;