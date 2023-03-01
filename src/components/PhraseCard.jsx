

const PhraseCard = ({  phraseData }) => {
//console.group(phraseData)


  return(
  
    <div className="phrase-card">
       
      <ul>
        <li> Frase: {phraseData.phrase} </li>
        <li> Autor: {phraseData.author} </li>
      </ul>

    </div>

  )
}

export default PhraseCard;