import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Main">
                <div className="Left">
                    <h1>Bienvenue sur <span>Random App !</span></h1>
                    <h4>La sécurité de vos données, c'est notre affaire</h4>
                    <p>
                        Nous mettons à votre disposition un système de génération 
                        automatique de Mot de passe, Login pour la protection de vos données.
                        Vous pouvez également générer des Noms (personne et animal) comme sa vous 
                        chante.
                    </p>
                    <button className='Btn'>
                        <NavLink to="/login" className='Btn-text'>Allez-y</NavLink>
                    </button>
                </div>
                <div className="Right">
                    <img src='./image.svg' alt='image1'/>
                </div>
            </div>
        </div>
    )
}

export default Home
