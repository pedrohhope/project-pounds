import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
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
    const remove = ['!', '?', '.', ',']
    remove.forEach(item => {
      texto = texto.replace(item, '')
    })

    return texto
      .replace(/[ÀÁÂÃÄÅ]/gi, 'A')
      .replace(/[ÈÉÊË]/gi, 'E')
      .replace(/[ÌÍÎÏ]/gi, 'I')
      .replace(/[ÒÓÔÕÖ]/gi, 'O')
      .replace(/[ÙÚÛÜ]/gi, 'U')
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
    <div className="container d-flex flex-column gap-3" style={{
      backgroundColor: '#242424',
      color: '#fff',
    }}>
      <Link to='/motivations' className='fs-5 mt-3'>Motivações</Link>
      <h2 className='fs-2'>Adicione uma frase</h2>
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

      {
        phrases.map((item, index) => (
          <div key={index}>
            <p className='libras' style={{
              wordBreak: 'break-all'
            }}>{removeAcentos(item.phrases)}</p>
            <p style={{
              wordBreak: 'break-all'
            }}>{item.phrases}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App