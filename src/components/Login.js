import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (

           <section id='Login' className="c0 c_24">
            <div>
                <form action="" method="post">
                    <div className="c0 c_24">
                        <input type="text" id="nome" name="nome" />
                    </div>
                    <div className="c0 c_24">
                        <input type="text" id="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" className="link01"/>
                    </div>
                </form>
            </div>
           </section> 
                           

        );
    }
}

export default Login;
