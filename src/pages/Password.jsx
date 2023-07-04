import React,{useState} from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

function Password() {
    const [state, setState] = useState(4)
    const [chk1, setChk1] = useState(false)
    const [chk2, setChk2] = useState(false)
    const [chk3, setChk3] = useState(false)
    const [val, setVal] = useState('')
    const input = (e) => {
        setState(e.target.value)
    }
    const zero = () => {
        setState(4)
        setVal('')
        setChk1(false)
        setChk2(false)
        setChk3(false)
    }
    
    const number = (e) => {
        if (chk1 === false) {
            setChk1(true)
        }
        else {
            setChk1(false)
        }
    }
    const letter = (e) => {
        if (chk2 === false) {
            setChk2(true)
        }
        else {
            setChk2(false)
        }
    }
    const special = () => {
        if (chk3 === false) {
            setChk3(true)
        }
        else {
            setChk3(false)
        }
    }

    const passRandom = (len) => {
        let rand = 0
        let letterRand = ''
        let specialsRan = ''
        let numberRand = ''
        let resutat = ''
        const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
        const specials = ['!','@','#','$','%','^','&','*','(',')','+','=','-','{','/','|',':',',','>','<',';','}',']','[','"','~']
        const numbers = ['1','2','3','4','5','6','7','8','9','0']

        for (let i = 0; i < len; i++) {
            rand = Math.floor(Math.random() * 26)
            letterRand += letters[rand]
            specialsRan += specials[rand]
        }
        for (let i = 0; i < len; i++) {
            rand = Math.floor(Math.random() * 10)
            numberRand += numbers[rand]
        }

        if (chk1 === true && chk2 === true && chk3 === true) {
            resutat += numberRand + letterRand + specialsRan
        }
        else if (chk1 === false && chk2 === true && chk3 === true) {
            resutat += letterRand + specialsRan
        }
        else if (chk1 === true && chk2 === false && chk3 === true) {
            resutat += numberRand + specialsRan
        }
        else if (chk1 === true && chk2 === true && chk3 === false) {
            resutat += numberRand + letterRand
        }
        else if (chk1 === false && chk2 === false && chk3 === true) {
            resutat += specialsRan
        }
        else if (chk1 === false && chk2 === true && chk3 === false) {
            resutat += letterRand
        }
        else if (chk1 === true && chk2 === false && chk3 === false) {
            resutat += numberRand
        }
        else {
            resutat = ''
            alert("Cocher au moins une case !")
        }

        let pass = ''
        for (let i = 0; i < len; i++) {
            rand = Math.floor(Math.random() * resutat.length)
            if (resutat === '') {
                pass = ''
            }
            else {
                pass += resutat[rand] 
            }
        }

        setVal(pass)
    }


    return (
        <div className="Pass">
            <Header />
            <div className="Content">
                <div className="Left">
                    <div className="Parent">
                        <div className="Input-box">
                            <label htmlFor="input">Entrer la longueur du mot de passe :</label>
                            <input type="number" id='input' value={state} onChange={input}/>
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">Selectionner le niveau de compléxité :</label>
                            <div className="Level">
                                <input type="checkbox" id='input' value={chk1} onChange={() => number()}/>
                                <small>Chiffre Ex: 1234567890</small>
                            </div>
                            <div className="Level">
                                <input type="checkbox" id='input' value={chk2} onChange={() => letter()}/>
                                <small>Lettre Ex: qwertyuiop</small>
                            </div>
                            <div className="Level">
                                <input type="checkbox" id='input' value={chk3} onChange={() => special()}/>
                                <small>caractère spéciaux  Ex:  [;0])^(70</small>
                            </div>
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">Resultat :</label>
                            <div className="Extend">
                                <input type="text" id='input' value={val}/>
                                <button><i className='fa-solid fa-copy'></i></button>
                            </div>
                        </div>
                        <div className="Input-box">
                            <button className='Btn2' onClick={() => passRandom(state)}>Générer</button>
                            <button className='Btn2'onClick={() => zero()}>Effacer</button>
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <h1>Génération des mots de passe !</h1>
                    <p>
                        Dans cette section, vous devez entrer une valeur (chaine, numerique) et notre programme
                        se chargera de vous générer un mot de passe à chaque pression sur le bouton
                    </p>
                    <div className="All-btn">
                        <button className='Btn'>
                            <NavLink to="/login" className='Btn-text'>Login</NavLink>
                        </button>
                        <button className='Btn2'>
                            <NavLink to="/" className='Btn-text'>Accueil</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password
