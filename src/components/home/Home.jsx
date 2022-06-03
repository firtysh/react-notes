import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home({ setRerender,setAppdata,appData }) {
    console.log(appData,'homw');
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
    const handleContinue = (e) => {
        e.preventDefault();
        const userData = {
            ...name,
            notes: [],
            count:0,
            flag: true,
        }
        appData.set(userData);
        setAppdata((prevData)=>{
            return {
                ...prevData,
                data:userData
            }
        })
        // setRerender(true)
        navigate('/notes', { replace: true });
    };

    return (
        <div className="main_home">
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
                        <input className='input' required type="text" name='firstName' onChange={updateName} placeholder='Enter Your First Name' />
                        <input className='input' required type="text" name='lastName' onChange={updateName} placeholder='Enter Your Last Name' />
                        <button type="submit" className='btn' >Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home