import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Dog() {

    function loadDog() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(function (response) {
                console.log(response);
                setDog(response.data.message)
            })



    }
    function loadCat() {
        axios.get('https://catfact.ninja/fact')
            .then(function (response) {
                console.log(response);
                setCat(response.data.fact)
            })
    }



    const [dog, setDog] = useState("")
    const [cat, setCat] = useState("")
    function loading(){
        loadCat();
        loadDog();
    }


    return (
        <div>
            <img src={dog} />
            <br />
            {cat}
            <br />
            <button
                onClick={loading
                }
            >
                Drück mich
            </button>
        </div>
    )
}

export default Dog