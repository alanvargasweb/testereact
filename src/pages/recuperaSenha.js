import React from 'react';

export default class recuperaSenha extends Comment{

constructor(){
        super();
        this.linkRecuperacaoSenha = "menu";
    }

  render(){
    return(
      <div>
        <form action="{this.linkRecuperacaoSenha}">
            <div className='c0 c_24'>
                <label for='password'>
                    <input type="password" name='password'/>
                </label>
            </div>
            <div className='c0 c_24'>
                <label for='repeatPassword'>
                    <input type="password" name='repeatPassword'/>
                </label>
            </div>
            <div className='c0 c_24'>
                <input type="submit" value='Alterar senha'/>
            </div>
        </form>
      </div>
    )
  }
}


