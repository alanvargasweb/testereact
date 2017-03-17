import React, { Component } from 'react';

class InformacoesUsuarios extends Component {
    render() {
        return (

            <section id="cpInformacoesUsuarios" className="c3c c_24">

                <header className=''>
                    <h2 title="Informaçôes do usuário">Informações do usuário</h2>
                </header>

                <div>
                    <table className="table_list">
                        <tbody>

                            <tr>
                                <td><p><strong>Nome</strong></p></td>

                                <td><p></p></td>
                            </tr>

                            <tr>
                                <td><p><strong>Telefone</strong></p></td>

                                <td><p></p></td>
                            </tr>

                            <tr>
                                <td><p><strong>E-mail</strong></p></td>

                                <td><p> <a href="" className="link_default">Alterar</a></p></td>
                            </tr>

                            <tr>
                                <td><p><strong>Data da compra</strong></p></td>

                                <td><p></p><p></p></td>
                            </tr>

                            <tr>
                                <td><strong>Black list</strong></td>

                                <td><p></p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <footer>
                    <div className="menu mlist_02">
                        <ul>
                            <li>
                                <a href="">Histórico de aquisição</a>
                            </li>
                            <li>
                                <a href="">Histórico de cobrança</a>
                            </li>
                            <li>
                                <a href="">Histórico de mensagens</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </section>

        );
    }
}

export default InformacoesUsuarios;
