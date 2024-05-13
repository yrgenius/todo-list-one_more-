import React, { Component } from 'react'
import '../../fonts/all.min.css'
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props
        let classNameWrapper = 'todo-list-item__wrapper'
        let className = 'todo-list-item'

        if (done) {
            className += ' done'
        }

        if (important) {
            classNameWrapper += ' important'
        }

        return (
            <div className={classNameWrapper}>
                <span
                    className={className}
                    onClick={onToggleDone}>
                    {label}
                </span>
                <div className='button__wrapper'>
                    <button
                        className='todo-list__btn btn btn-secondary'
                        onClick={onDeleted}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <button
                        className='todo-list__btn btn btn-dark'
                        onClick={onToggleImportant}>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        )
    }
}


