import React, { Component } from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import './app.css'

export default class App extends Component {

    maxId = 0

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Coding...!!!'),
        ],
        searchText: '',
        filter: 'all',    // all, active, done
    }

    onSearchChange = (searchText) => {
        this.setState({ searchText })
    }


    onSelectItems(items, searchText) {
        if (!searchText) return items
        const outArray = items.filter((item) => item.label
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) > -1)
        console.log('select array: ', outArray)
        return outArray
    }

    selectFilter(selectValue, items) {
        if (selectValue === 'all') return items
        if (selectValue === 'active') {
            return items.filter((item) => !item.done)
        }
        if (selectValue === 'done') {
            return items.filter(item => item.done)
        }
        return items
    }

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        }
    }

    toggleProperty(arr, id, propName) {
        const indx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[indx]
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }
        const newArrayData = [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)]

        return newArrayData
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const indx = todoData.findIndex(el => el.id === id)
            const newArray = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({ todoData }) => {
            return { todoData: [...todoData, newItem] }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const newArrayData = this.toggleProperty(todoData, id, 'done')
            return { todoData: newArrayData }
        })
    }

    render() {
        const { todoData, searchText, filter } = this.state
        const visibleItems = this.selectFilter(filter, this.onSelectItems(todoData, searchText))
        const isShowDate = true
        const date = <span>Now {(new Date()).toLocaleString()}</span>
        const doneCount = todoData.reduce((red, el) => {
            return el.done ? red += 1 : red
        }, 0)
        const todoCount = todoData.length - doneCount

        return (
            <div className='wrapper'>
                {isShowDate ? null : date}
                {date}
                <AppHeader
                    toDo={todoCount}
                    done={doneCount} />
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                    filter={filter}
                    onFilterChange={this.onFilterChange} />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm
                    addItem={this.addItem} />
            </div>
        )
    }
}
