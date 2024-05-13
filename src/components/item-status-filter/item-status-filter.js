import { Component } from 'react'
import './item-status-filter.css'


export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]



    render() {
        const { filter } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            return (
                <button
                    key={label}
                    className={isActive ? 'btn btn-info' : 'btn btn-outline-secondary'}
                    type='button'
                    onClick={() => this.props.onFilterChange(name)}
                >
                    {label}
                </button>
            )
        })

        return (
            <ul className='status-filter__wrapper btn-group'>
                {buttons}
            </ul>
        )
    }
}

