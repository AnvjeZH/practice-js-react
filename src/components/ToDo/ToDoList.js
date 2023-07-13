import css from './ToDoList.module.css';

export default function ToDoList({ todos, onDeleteToDo, toggle}) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {todos.map(({ id, text, completed }) => (
          <li className={css.item} key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggle(id)}

            />
            <p className={css.item_text}>{text}</p>
            <button
              onClick={() => onDeleteToDo(id)}
              className={css.delete_btn}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

