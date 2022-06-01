import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home({setRerender}) {
    
    const [name, setName] = useState(
        {
            firstName: '',
            lastName: ''
        }
    )
    const updateName = (e) => {
        setName((prevState) => {
            return ({
                ...prevState,
                [e.target.name]: e.target.value,
            })
        })
    };
    const navigate = useNavigate();
    const handleContinue=(e)=> {
        // e.preventDefault();
        const userData = {
            ...name,
            notes: [
                {
                    id: 1,
                    title: "Here is your note title",
                    note: "Here goes your actual note",
                    color: "#acacca"
                }
            ],
            flag: true,
        }
        localStorage.setItem('NotesAppData', JSON.stringify(userData));
        setRerender(true)
        navigate('/notes',{replace:true});
    };

    return (
        <div className="baseContainer">
            <div className="topContainer">
                <div className="backdrop"></div>
                <div className="headerContainer">
                    <h2 className="headerText">Hello <br /> There</h2>
                    <div className="smallText">Please enter your name to continue !</div>
                </div>
            </div>
            <div className="formContainer">
                <form className="form" onSubmit={handleContinue}>
                    <input required type="text" name='firstName' onChange={updateName} placeholder='Enter Your First Name' />
                    <input required type="text" name='lastName' onChange={updateName} placeholder='Enter Your Last Name' />
                    <button type="submit"className='btn' >Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Home