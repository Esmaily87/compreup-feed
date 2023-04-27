import {Header} from "./components/Header";
import {Post, PostType} from "./components/Post.jsx";
import './global.css';
import { Sidebar } from "./components/Sidebar";


import styles from'./App.module.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/esmaily87.png',
      name: 'Esmaily Negreiros Peixoto',
      role: 'CTO @YliamTech'
    },
    content: [
      {type: 'paragraph', content: 'De acordo com as avaliações feitas pelos fornecedores, a Marca testada não atendeu os requisitos de rendimento'},
      {type: 'paragraph', content: 'O que vocês acharam?'},
      {type: 'link', content: 'esmaily.peixoto/devthebest'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'De acordo com as avaliações feitas pelos fornecedores, a Marca testada não atendeu os requisitos de rendimento'},
      {type: 'paragraph', content: 'O que vocês acharam?'},
      {type: 'link', content: 'maik.brito/dev'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }

]

export function App() {
  return (
   <div>
   <Header/>
   
   <div className={styles.wrapper}>
   <Sidebar/>
    <main>
    {posts.map(post => {
      return (
      <Post
        
        key = {post.id}
        post = {post}
           
      />
    )
    })
    
    }
    </main>
   </div>
   
   </div>

  )
}
