import React from 'react';
import styles from '../Header/header.module.css';



function header() {

  return (
  <div className={styles.Root}>
    <header className={styles.Header}>
    <a href="http://localhost:5173/" ><img className={styles.Logo} src="./public/images/logo_cooking_sombra.png" /> </a>
      <div className={styles.Conteudo}>  
        <form className={styles.Form} name='search'>
          <input className={styles.Input} type='search' name='pesquisar' value="" placeholder='pesquisar'/>
        </form>
        <a href="http://localhost:5173/Rsalgadas"><button className={styles.Button}>Receitas Salgadas</button></a>
        <a href="http://localhost:5173/RDoces"><button className={styles.Button}>Receitas Doces</button></a>
        <a href="http://localhost:5173/Rbebidas"><button className={styles.Button}>Receitas Bebidas</button></a>
      </div>
      <div className={styles.Links}>
      </div>
        <a href="http://localhost:5173/Cadastrar" className={styles.Login}><img className={styles.Icons} src="./public/icons/user.png" alt="" /> <link rel="stylesheet" href="http://localhost:5173/Login" /> login / cadastrar</a>
    </header>
  </div>
   )
  }


export default header

































// function header() {

//   return (
//     <>
//      <header className='header'>
//         <a href="http://localhost:5173/"><img className='logo' src="./public/images/logo_cooking_sombra.png" /></a>
//         <div className='conteudo'>  
//           <form name='search'>
//             <input type='search' name='pesquisar' value="" placeholder='pesquisar'/>
//           </form>
//           <a href="http://localhost:5173/Rsalgadas"><button>Receitas Salgadas</button></a>
//           <a href="http://localhost:5173/RDoces"><button>Receitas Doces</button></a>
//           <a href="http://localhost:5173/Rbebidas"><button>Receitas Bebidas</button></a>
//           </div>
//         <a href="/" className='login'><img src="/" alt="" />login / cadastrar</a>
//      </header>
//     </>
//   )
// }


// export default header