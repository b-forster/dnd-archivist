import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <figure id='logo-img'>
                <img src="logo192.png" alt="Parchment icon with a drawing of an Egyptian-style eye" />
            </figure>
            <h1>Archivist</h1>
            <h2>
                A Character Creation & Leveling Companion App<br />
                for Dungeons & Dragons 5th Edition
            </h2>
        </header>
    );
}

export default Header;
