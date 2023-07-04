import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

function Name() {
    return (
        <div className="Name">
            <Header />
            <div className="Content">
                <div className="Left">
                    <div className="Parent">
                        <div className="Input-box">
                            <label htmlFor="input">S'agit-il d'un nom féminin ou masculin ? :</label>
                            <div className="Level">
                                <div className="a">
                                    <small>Masculin</small>
                                    <input type="radio" id='input' />
                                </div>
                                <div className="b">
                                    <small>Féminin</small>
                                    <input type="radio" id='input' />
                                </div>
                            </div>
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">D'un nom de personne ou animal ? :</label>
                            <div className="Level">
                                <div className="a">
                                    <small>Personne</small>
                                    <input type="radio" id='input' />
                                </div>
                                <div className="b">
                                    <small>Animal</small>
                                    <input type="radio" id='input' />
                                </div>
                            </div>
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">Longueur du nom [pas obligatoire] :</label>
                            <input type="number" />
                        </div>
                        <div className="Input-box">
                            <label htmlFor="input">Resultat :</label>
                            <div className="Extend">
                                <input type="text" id='input' />
                                <button><i className='fa-solid fa-copy'></i></button>
                            </div>
                        </div>
                        <div className="Input-box">
                            <button className='Btn2'>Générer</button>
                            <button className='Btn2'>Effacer</button>
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <h1>Génération des noms [personne ou autre !]</h1>
                    <p>
                        Dans cette section, vous devez choisir s'il s'agit d'un nom de personne ou animal, suivie du sexe et notre programme
                        se chargera de vous générer un nom à chaque pression sur le bouton
                    </p>
                    <div className="All-btn">
                        <button className='Btn'>
                            <NavLink to="/login" className='Btn-text'>Login</NavLink>
                        </button>
                        <button className='Btn2'>
                            <NavLink to="/home" className='Btn-text'>Accueil</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name