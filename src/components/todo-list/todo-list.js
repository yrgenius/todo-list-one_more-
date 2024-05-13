import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item

        return (
            <li className='list-group-item todo-list' key={id}>
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        )
    })

    return (
        <ul className='todo-list__wrapper'>
            {elements}
        </ul>
    )
}

export default TodoList