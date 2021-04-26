import axios from 'axios';
import { useState } from 'react';

function Userform() { //Component, Controller
    //model
    const [userform, setUserform] = useState({
        name: 'Ram',
        mobileNumber: "1"

    })
    // const save(){

    // }
    const save = function (event) {
        console.log(userform.name);
        axios
            .post('http://localhost:8080/user', userform)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //console.log(userform.age);
    }
    return (//View
        <div>
            <input value={userform.name} name='name' onChange={updateState} ></input>
            <input value={userform.mobileNumber} name='mobileNumber' placeholder='Enter the mobile  number' onChange={updateState}></input>

            <button onClick={save} >Save</button>
        </div>
    )



    function updateState(event) {
        //console.log(event);
        const current = { ...userform, [event.target.name]: event.target.value };
        console.log(current);
        setUserform(current);

        // setState
    }

}
export default Userform;
