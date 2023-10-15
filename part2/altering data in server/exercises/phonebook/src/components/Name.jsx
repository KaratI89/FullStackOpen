export const Person = ({ person, deleteFunction, changeFunction }) => {
  return (
    //если бы в обработчик зарегисирировали ссылку "phonebookService.personDelete" то всё бы работало, но если передаем аргумент, в скобках,
    //то это уже вызов функции, а обработчик может быть или функцией(вызова функции), как здесь, или ссылкой на функцию.
    <li>
      {person.name} {person.number} 
      <button onClick={()=>deleteFunction(person.id)} >delete</button> 
      <button onClick={changeFunction}>change</button>
      </li>
  )
}
/* */