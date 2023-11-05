import React from 'react';
import logo from './logo/rickandmorty.png'

function Logo(){
    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
        </header>
    )
}
//test for github

export default Logo