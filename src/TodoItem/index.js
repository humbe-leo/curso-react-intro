import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem({ index, title, completed, onComplete, onDelete }) {
  return (
    <li className="todoItem">
      <CompleteIcon
        completed={completed}
        onComplete={() => onComplete(index)}
      />
      <p className={`todoItem-p ${completed && "todoItem-p--completed"}`}>
        {title}
      </p>
      <DeleteIcon onDelete={() => onDelete(index)} />
    </li>
  );
}

export { TodoItem };
