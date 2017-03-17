import React, { Component } from 'react';




class LateralMenu extends Component {
    constructor(){
        super();
        this.name = "menu";
    }
  render() {

    return (
       
       <nav id="nav" className="c3b c_8">
              <div className="menu mlist_01 c3c c_24">
                  <h3>{this.name}</h3>
                            <ul>
                                <li>
                                    <a href="index">Painel</a>
                                </li>
                                <li>
                                    <a href="buscaUsuario">Buscar Usuario</a>
                                </li>
                                <li>
                                    <a href="contato">Contato</a>
                                </li>
                                <li>
                                    <a href="logout">Sair</a>
                                </li>
                            </ul>
                        </div>
              </nav>

       

    );
  }
}

export default LateralMenu;
