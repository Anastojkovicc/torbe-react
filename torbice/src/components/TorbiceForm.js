import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function TorbiceForm({dodajTorbicu}){
   const[torbica, setTorbica] = useState({
       id: "",
       oblik: "",
       boja: "",
       dimenzije: ""
   });

   function handleOblikInputChange(e){
       setTorbica({...torbica, oblik : e.target.value});
   }  

   function handleBojaInputChange(e){
    setTorbica({...torbica, boja : e.target.value});
    }  

    function handleDimenzijeInputChange(e){
        setTorbica({...torbica, dimenzije : e.target.value});
    }  

    function handleDodajTorbicu(e){
        e.preventDefault();
        if(torbica.oblik.trim() && torbica.boja.trim() && torbica.dimenzije.trim()){
            dodajTorbicu({...torbica, id: uuidv4()});
        }
        setTorbica({...torbica,oblik:"",boja:"",dimenzije:""});
    }

   return (
    <form class="formaTorbica" onSubmit={handleDodajTorbicu}>
        <div>
            <label for="oblik">Oblik:</label>
            <input onChange={handleOblikInputChange} value={torbica.oblik} name="oblik" type="text" placeholder="Unesite oblik"></input>
        </div>
        <div>
        <label for="boja">Boja:</label>
            <input onChange={handleBojaInputChange} value={torbica.boja} name="boja" type="text" placeholder="Unesite boju"></input>   
        </div> 
        <div>
            <label for="dimenzije">Dimenzije:</label>
            <input onChange={handleDimenzijeInputChange} value={torbica.dimenzije} name="dimenzije" type="text" placeholder="Unesite dimenzije"></input>
        </div>
        <button type="submit" class="dodajTorbicu">
            Dodaj torbicu
        </button>
    </form>
   );

}

export default TorbiceForm;