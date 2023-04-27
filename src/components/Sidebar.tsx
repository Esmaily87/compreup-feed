import { Avatar } from "./Avatar";

import { PencilLine } from "phosphor-react";
import styles from './Sidebar.module.css';

export function Sidebar(){
return(        
    <aside className={styles.sidebar}>
    <img 
    className={styles.cover} 
    src="https://plus.unsplash.com/premium_photo-1664302306003-ab45efb4c12c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
    />

    <div className={styles.profile}>
        <Avatar src="https://www.github.com/esmaily87.png" />
        <strong>Esmaily Peixoto</strong>
        <span>Desenvolvedor de Software</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
        </a>
    </footer>
    </aside>
    );
}