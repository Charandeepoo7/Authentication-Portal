import React, { useState } from "react";

function FormHandling(){

    const [name , setName] = useState('');
    const [country , setCountry] = useState('');
    const [age , setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert( `My Name is ${name} And I'm From ${country}. My Age is ${age}`)
        var user ={
            Name : name,
            Country : country,
            Age : age
        }
        console.log(user);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter Your Name : </label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label>Enter Your Country : </label>
                    <input type="text" value={country} onChange={(event) => setCountry(event.target.value)}/>
                </div>
                <div>
                    <label>Enter Your Age : </label>
                    <input type="number" value={age} onChange={(event) => setAge(event.target.value)}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormHandling;