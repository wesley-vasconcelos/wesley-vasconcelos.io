import React from 'react';
import '../../header.scss';
import wesley from "../../wesley.jpeg"

const Header = () => {
  return (
    <div >
      <header>
        <div  className='box-header'><p>Professional CV Home</p></div>
      <div className='box-info'>
        <div > <img className='box-info-img' src={require('../../wesley.jpeg')} /> </div>
        <div className='box-info-text'>
          <div>
          <h1>Wesley de Vasconcelos</h1>
            <p>Programador Front-End</p>
          </div>
          <div className='box-info-ger'>
            <p>Endereço: Rua Simone Gonçalves, n°132, Vila Ana, Mauá - SP , CEP: 09390-140</p>
            <p>Data de Nascimento: 18/08/1994, Idade: 25 anos Estado civil: Solteiro</p>
            <p>Contatos: (11) 9 3017-8282 / (11) 9 8109-1650</p>
            <p>E-mail: Wesley19941@hotmail.com</p>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default Header;