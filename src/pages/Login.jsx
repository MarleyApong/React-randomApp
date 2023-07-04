import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

function Login() {
    const [state, setState] = useState(1)
    const [resultat, setResultat] = useState('')
    // const [reset, setReset] = useState('')
    const enterLenght = (e) =>  {
        setState(e.target.value)
    }

    const string = (length) => {
        const chars = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
        // const numbers = ['1','2','3','4','5','6','7','8','9','0']
        let strings = ""
        let rand = 0
        for (let i = 0; i < length; i++) {
            rand = Math.floor(Math.random() * 26);
            strings += chars[rand]
        }

        // for (let i = 0; i < length; i++) {
        //     if (strings[0] === numbers[i]) {
        //         strings[0] = chars[i].toUpperCase()
        //     }
        // }

        setResultat(strings);
    }

    function copied () {

    }

    function zero () {
        setState(0)
        setResultat('')
    }
    
    return (
        <div className="Login">
            <Header />
            <div className="Content">
                <div className="Left">
                    <div className="Parent">
                    <div className="Input-box">
                            <label htmlFor="input">Entrer la taille de la chaine :</label>
                            <input type="number" id='input' value={state} onChange={enterLenght}/>
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">Resultat :</label>
                            <div className="Extend">
                                <input type="text" value={resultat} id='input' />
                                <button onClick={() => copied()}><i className='fa-solid fa-copy'></i></button>
                            </div>
                        </div>
                        <div className="Input-box">
                            <button className='Btn2' onClick={() => string(state)}>Générer</button>
                            <button className='Btn2' onClick={() => zero()}>Effacer</button>
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <h1>Génération des identifiants !</h1>
                    <p>
                        Dans cette section, vous devez entrer une valeur (chaine, numerique) et notre programme
                        se chargera de vous générer un login à chaque pression sur le bouton
                    </p>
                    <div className="All-btn">
                        <button className='Btn'>
                            <NavLink to="/login" className='Btn-text'>Accueil</NavLink>
                        </button>
                        <button className='Btn2'>
                            <NavLink to="/password" className='Btn-text'>Password</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
