import './index.css'

const TodoItem = props => {
  const {todo, onDelete} = props
  const {id, title} = todo

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <div>
        <button className="button" type="submit" onClick={onDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
