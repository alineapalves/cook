import React from 'react';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer/index';
import styles from "../Login/login.module.css";









function Login() {


    return (
        <>
            <Header />
            <div className={styles.Container} >
                

                <div className={styles.Logar}>
                    <h1>Login</h1>
                    <form >
                        <div>
                            <label htmlFor=''></label>
                            <br />
                            <input className={styles.Usuario} type="text"id="title" name="title" placeholder="Nome" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            <br />
                            <input className={styles.Senha} type="password" id="url" name="url"  />
                        </div>
                        <button className={styles.Button} type="submit"> Login </button><br />
                        <a href="">Esqueceu a senha</a>


                    </form>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default Login;