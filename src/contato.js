import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Header from './components/Header';
import LateralMenu from './components/LateralMenu';
import Footer from './components/Footer';

import PacoteDeUsuario from './components/PacoteDeUsuario';

import InformacoesUsuarios from './components/InformacoesUsuarios';


/* esse componente vai puxar os dois componentes que serão chamados no painel */

var IndexMain = React.createClass({

  render(){
    return(
      <div>
        <InformacoesUsuarios />
        <PacoteDeUsuario />
      </div>
    )
  }

});


import './index.css';
import './styles.css';

/* Renderização do cabeçalho */
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

/* Renderização do menu lateral */
ReactDOM.render(
  <LateralMenu />,
  document.getElementById('nav')
);

/* Renderização do rodape */
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);


/* Renderização do conteudo principal no painel */
ReactDOM.render(
  <IndexMain />,
document.getElementById('mainContent')
);

/* Renderização do conteudo buscar usuario */

/* Renderização do conteudo buscar usuario */

/* Renderização do conteudo buscar usuario */

/* Renderização do conteudo pagina de contato */


