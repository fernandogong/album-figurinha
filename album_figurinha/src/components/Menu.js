import React,{useState} from 'react';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function Menu() {
    const [state,setState]=useState(false);
    let url="";
    return(
        <div className="topnav" id="myTopnav">
            
            <a href={url}>Home</a>
            <a href={url}>Notícias</a>
            <a href={url}>Jogos</a>
            <a href={url}>Seleções</a>
            <a href={url}>Estádios</a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    );
}
export default Menu;