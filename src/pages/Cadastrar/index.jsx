import React from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import styles from "../Cadastrar/cadastrar.module.css";













function Cadastrar() {



    return (
        <>
        <Header/>
            <div className={styles.Container}>
                

                <div className={styles.Cad}>
                    <h1>Cadastro</h1>
                    <form >
                        <div >
                            <label htmlFor=""></label>
                            
                            <input className={styles.Usuario} type="text" id="title" name="title"placeholder="Nome" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            
                            <input className={styles.Usuario}  type="text" id="title" name="title" placeholder="Email" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            
                            <input className={styles.Usuario} type="text" id="title" name="title" placeholder="Telefone"/>
                        </div>
                        <div >
                            <label htmlFor=""></label>
                        
                            <input className={styles.Senha} type="password" id="url" name="url" placeholder="Senha"/>
                        </div>
                        <button className={styles.Button} type="submit"> Cadastrar </button><br />
                        <a href="">Esqueceu a senha</a>


                    </form>
                </div>


            </div>
            <Footer/>
        </>

        
    )
}


export default Cadastrar;