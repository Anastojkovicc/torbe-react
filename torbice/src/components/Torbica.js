import React from "react";

function Torbica({torbica, obrisiTorbicu}){

    function handleObrisiTorbicu(){
        obrisiTorbicu(torbica.id);
    }

    return(
        <div style={{display:"flex"}}>   
            <li class="torbica">
                Oblik torbice: {torbica.oblik} | Boja: {torbica.boja} | Dimenzije: {torbica.dimenzije} 
            </li>
            <button class="obrisiTorbicu" onClick={handleObrisiTorbicu}>&#x232B;</button>
        </div>
    );
}


export default Torbica;