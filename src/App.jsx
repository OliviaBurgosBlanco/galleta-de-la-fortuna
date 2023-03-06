 
//import reactLogo from './assets/react.svg'
import './App.css'
import PhraseCard from './components/PhraseCard';
import phrases from './data/phrases.json';
import { useState } from 'react';
import Title from './components/Title';


 

function App() {

  
   const img = [ "url(/img/fondo1.jpg)", "url(/img/fondo2.jpg)", "url(/img/fondo3.jpg)", "url(/img/fondo4.jpg)" ]


   
   const [ index, setIndex ] = useState( 0 )
   const [ indexImg, setIndexImg] = useState ( 0 )
   
   
   
   const changePhrase = () => {
       
   (Math.floor(Math.random() * 4))

   setIndexImg(Math.floor(Math.random() * img.length))

   setIndex(Math.floor(Math.random() * phrases.length))
    /*  if( index === ( phrases.length - 1 ) ){
         //Estoy en el ultimo elemento del arreglo
         //Regresar al primer elemento
         setIndex( 0 )
      }else{
         //Que continue avanzando.
         //El indice va a aumentar en 1
         setIndex( index + 1)
      }
      
      */
   }

  /* if( indexImg === ( img.length - 1 ) ){
      //Estoy en el ultimo elemento del arreglo
      //Regresar al primer elemento
      setIndexImg( 0 )
   }else{
      //Que continue avanzando.
      //El indice va a aumentar en 1
      setIndexImg( indexImg + 1)
   }
*/
  

   return (

 
    <div className='App' style={{ backgroundImage: img[ indexImg ] }}>
   
<div className='App'>
<Title
text="Galleta de la Fortuna"
>

</Title>

</div>
 <h1>hola</h1>

    <PhraseCard 
    phraseData={ phrases[index] }
    />


<button onClick={ changePhrase }> Ver Otro
   {/* <i className='bx bx-refresh'></i> */}
</button>


    </div>



   )
}

export default App
