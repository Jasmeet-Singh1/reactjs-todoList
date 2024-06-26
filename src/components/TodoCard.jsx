/* eslint-disable react/prop-types */
export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsCantainer'>
        <button onClick={() => handleEditTodo(index)}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </li>
  );
}
