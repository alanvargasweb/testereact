import React from 'react';
import ReactDOM from 'react-dom';
import {router, route, IndexRoute, hashHistory} from 'react-router';


import Header from './components/Header';
import LateralMenu from './components/LateralMenu';
import Footer from './components/Footer';

import PacoteDeUsuario from './components/PacoteDeUsuario';

import InformacoesUsuarios from './components/InformacoesUsuarios';
import PesquisaDeUsuarios from './components/PesquisaDeUsuarios';
import ConteudoIndex from './components/ConteudoIndex';





import './index.css';
import './styles.css';
/* esse componente vai puxar os dois componentes que serão chamados no painel */


var App = React.createClass({

  render: function () {
    return (

      <div id="site">

        <Header />

        <main id="content" className="fluid">

          <div id="rg_content_01" className="fluid">
            <div className="limited">

              <LateralMenu />

              <section id="mainContent" className="c3b c_16">
                <InformacoesUsuarios />
                <PacoteDeUsuario />
              </section>

              <br className="break" />

            </div>
          </div>

        </main>

        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('App')
);


