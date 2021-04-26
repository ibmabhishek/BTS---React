import { useState } from 'react';

function Userform() { //Component, Controller
    //model
    const [userform, setUserform] = useState({
        name: 'Ram',
        age: 23,
    })
    // const save(){

    // }
    return (//View
        <div>
            <input value={userform.name} onChange={handleEvent} ></input>
            <input value={userform.age} onChange={handleEvent}></input>

            <button onClick={save} >Save</button>
        </div>
    )

    function save() {
        console.log(userform.name);
        console.log(userform.age);
    }

    function handleEvent(event) {
        console.log(event);
        setUserform({

            name: event.target.value,
            age: event.target.value
        })
        // setState
    }

}
export default Userform;
