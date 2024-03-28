export const Person = ({ person, deleteFunction, changeFunction }) => {
  return (
    <li>
      {person.name} {person.number} 
      <button onClick={()=>deleteFunction(person.id)} >delete</button> 
      <button onClick={()=>changeFunction(person.id)}>change</button>
      </li>
  )
}
/* */