import { useState } from "react"

export function AddCategory({onNewValue}) {
const [inputValue, setinputValue] = useState('')

function onImputChange(value){
  setinputValue(value)
}

function onSubmit(event){
  event.preventDefault()
  if(inputValue.trim().length <= 1) return;
  //setCategories(c => [inputValue, ...c])
  onNewValue(inputValue.trim())
  setinputValue('')

} 

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
      <input type="text" placeholder="Buscar Gift" value={inputValue} onChange={(event) =>onImputChange(event.target.value)} />
    </form>
  )
}
