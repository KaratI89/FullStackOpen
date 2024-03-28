export const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name:
        <input
          value={props.newName} //value связана с частью состояния, при заполнении поля ввода, каждое изменение вызывает onChange обработчик, где происходит запись измененного объекта в состояние
          onChange={props.handleNameChange} />
      </div>
      <div>
        number:
        <input
          value={props.newNumber}
          onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>

  );
};
