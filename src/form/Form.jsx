import { forwardRef } from 'react'

const Form = forwardRef(({ onClick }, ref) => {
  return (
    <form>
      <label htmlFor='name'>What is your name?</label>
      <input type='text' id='name' name='name' ref={ref} />
      <button onClick={onClick} type='button'>
        Ok
      </button>
    </form>
  )
})

export default Form
