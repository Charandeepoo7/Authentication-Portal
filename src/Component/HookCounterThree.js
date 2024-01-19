import {React , useState} from 'react'

function HookCounterThree(){
  const [names , setNames] = useState({firstName:'' , lastName:''})
  return(
    <form>
      <input type="text" value={names.firstName} onChange={(event) => setNames({...names , firstName: event.target.value})}/>
      <input type="text" value={names.lastName} onChange={(event) => setNames({...names , lastName: event.target.value})}/>

      <h2>FirstName is : {names.firstName}</h2>
      <h2>LastName is : {names.lastName}</h2>
      <h2>{JSON.stringify(names)}</h2>
    </form>
  )
}
export default HookCounterThree