import VLibras from '@djpfs/react-vlibras'
import { useState } from 'react';

interface IPhrases {
  phrases: string
  sinals: string[]
}

function App() {
  const [phrases, setPhrases] = useState<IPhrases[]>([{
    phrases: 'Olá, mundo!',
    sinals: ['O', 'l', 'á', ' ', 'm', 'u', 'n', 'd', 'o']
  }])

  const [inputValue, setInputValue] = useState<string>('')

  const removeAcentos = (texto: string) => {
    return texto
      .replace(/[áàãâä]/gi, 'a')
      .replace(/[éèẽêë]/gi, 'e')
      .replace(/[íìĩîï]/gi, 'i')
      .replace(/[óòõôö]/gi, 'o')
      .replace(/[úùũûü]/gi, 'u');
  }

  const onChageInput = (e: any) => {
    setInputValue(e.target.value)
  }

  const addPhrase = () => {
    if (!inputValue.trim()) return;
    if (phrases.find(item => item.phrases === inputValue)) {
      setInputValue('')
      return;
    }

    const sanitizedInput = inputValue.trim()
    const newSinals = sanitizedInput.split('')
    const newPhrase = {
      phrases: inputValue,
      sinals: newSinals
    }

    const newPhrases = [newPhrase, ...phrases];

    setPhrases(newPhrases)
    setInputValue('')
  }




  return (
    <div className="container">
      <VLibras
        forceOnload={true}
      />
      <h1>Adicione uma frase</h1>
      <input
        type="text"
        value={inputValue}
        onChange={onChageInput}
      />
      <button
        onClick={addPhrase}
      >
        Adicionar
      </button>
      <ul>
        {
          phrases.map((item, index) => (
            <li key={index}>
              <h3>{item.phrases}</h3>
              <div className='letters-container'>
                {
                  item.sinals.map((sinal: string) => (
                    <div className={`letters-${removeAcentos(sinal.toLocaleLowerCase())}`} >
                      {sinal === ' ' && <span className="space"> </span>}
                    </div>
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App