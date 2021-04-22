import { useState } from 'react';

function Userform() { //Component, Controller
    //model
    const [userform, setUserform] = useState({
        name: 'Ram'
    })
    return (//View
        <div>
            <input value={userform.name} onChange={handleEvent}></input>
        </div>
    )

    function handleEvent(event) {
        console.log(event);
        setUserform({

            name: event.target.value
        })
        // setState
    }

}
export default Userform;
