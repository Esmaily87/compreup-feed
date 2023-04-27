import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps ){

    const [likeCount, setLikeCount] = useState(0);
    

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        //setLikeCount( likeCount + 1 );
        setLikeCount((state) => {
            return state + 1
        });
    }


return(
    
    <div className={styles.comment}>
        <Avatar 
        hasBorder={false} 
        src="https://www.github.com/esmaily87.png" 
        alt=""
        />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Esmaily Peixoto</strong>
                    <time title="06 de fevereiro de 2023" dateTime="2023-06-02 06:19:32">Publicado há 1h</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário" >
                        <Trash size={24} />
                    </button>
                </header>
                <p>{ content }</p>
               

            </div>
            <footer>
                <button onClick={ handleLikeComment }> 
                    <ThumbsUp />
                    Aplaudir <span>{ likeCount }</span>
                </button>
            </footer>
        </div>
    </div>
)

}