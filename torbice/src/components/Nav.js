import React, {Component} from "react";

class Nav extends Component{

    render(){
        return(
            <ul class="menu">
                <li class="first" title="Pocetna"> <a href="/" class="home"> Pocetna </a></li>
                <li class="second" title="Porucivanje"> <a href="/porucivanje" class="porucivanje"> Porucivanje </a></li>

            </ul>
        );

    }

}

export default Nav;