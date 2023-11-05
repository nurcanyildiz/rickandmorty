import React from "react";
import './Buttons.css'

function Buttons({nextUrl, prevUrl, fetchCharacterData}) {
    return (
        <>
            <div className="buttons">
                <button className='btn' onClick={() => fetchCharacterData(prevUrl)}><span>Prev</span></button>
                <button className='btn' onClick={() => fetchCharacterData(nextUrl)}><span>Next</span></button>
            </div>
        </>
    );
}

export default Buttons;