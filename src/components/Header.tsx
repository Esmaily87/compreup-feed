import styles from './Header.module.css' //a extensão do arquivo deverá ser .module.css para que seja válida apenas para o componente
import igniteLogo from '../assets/ignite-logo.svg';
import compreUp from '../assets/compreup-logo.svg'



export function Header(){
    
    return( //className é o nome da classe
        <header className={styles.header}>

        
        <img src={compreUp} alt="Logotipo da Compreup"/>
        <strong></strong>
        
        </header>
    );

}