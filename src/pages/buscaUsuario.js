import React from 'react';

export default class buscaUsuario extends Comment{

  constructor(){
        super();
        this.linkBuscaUsuario = "menu";
    }

  render(){
    return(
      <div>
        <form action="{this.linkBuscaUsuario}">
            <div className='c0 c_24'>
              <label for='password'>
                <input type="text" name='password' placeholder='Usuario'/>
                </label>
            </div>
            <div className='c0 c_24'>
                <input type="submit" value='Buscar Usuario'/>
            </div>
        </form>
      </div>
    )
  }
  
}


