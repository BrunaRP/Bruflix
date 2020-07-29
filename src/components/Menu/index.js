import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Bruflix logo"/> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                novo vídeo
            </Button>

        </nav>
    );
     
}

export default Menu; //pra poder usar em outro lugares