import React, {Component} from "react";
import Torbica from "./Torbica";

function TorbiceLista({torbice,obrisiTorbicu}){
    return(
        <div class="uneseneTorbice">
            <ul class="listaTorbica">
                {torbice.map(torbica => (
                    <Torbica key={torbica.id} torbica={torbica} obrisiTorbicu={obrisiTorbicu} />
                ))}
            </ul>
        </div>
    );

}

export default TorbiceLista;