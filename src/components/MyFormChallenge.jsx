import { useRef, useState } from 'react'
import BoxColor from './BoxColor'
const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']

function MyForm() {
const inputRef = useRef(null)
const [value, setValue] = useState('')
  return (
    <section>
    <input 
        ref={inputRef}
        type="text"
        placeholder="Color"
        value={value}
        onChange={() => setValue(inputRef.current.value)}
      />
      <div className='container'>
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </section>
  );
}

export default MyForm;