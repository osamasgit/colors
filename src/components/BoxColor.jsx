import { useRef, useEffect } from 'react'

function BoxColor ({color, value}) {
  const boxRef = useRef(null)
  const classList = useRef(null)

  useEffect(() => {
    classList.current = boxRef.current.classList
  }, [])

  const matches = classList.current?.contains(value)
  const style = { 
    backgroundColor: matches ? color : 'transparent',
    border: `1px solid ${color}`,
    color: matches ? 'black' : color
  }

  return (
    <div ref={boxRef} className={`box ${color}`} style={style}>
      <h2>
        {
          matches ? `Yes, I am ${color}` : `No, I am not ${value}`
        }
        </h2>
    </div> 
  )
}
export default BoxColor;  
