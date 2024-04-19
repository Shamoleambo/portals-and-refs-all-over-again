import { useState, useRef } from 'react'
import Header from './header/Header'
import Form from './form/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [name, setName] = useState('--the name--')
  const input = useRef()

  function onFormSubmit() {
    setName(input.current.value)
  }

  return (
    <>
      <Header />
      <h1>Hello {name}</h1>
      <Form ref={input} onClick={onFormSubmit} />
    </>
  )
}

export default App
