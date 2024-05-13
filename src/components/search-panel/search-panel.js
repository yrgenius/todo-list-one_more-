import { Component } from 'react'
import ItemStatusFilter from '../item-status-filter'
import './search-panel.css'

class SearchPanel extends Component {

    state = {
        searchText: ''
    }

    onSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.value
        this.setState({ searchText })
        this.props.onSearchChange(searchText)
    }

    render() {
        const { filter, onFilterChange } = this.props
        const placeholder = 'search'

        return (
            <div className='searchPanel__wrapper'>
                <input
                    className='searchPanel__input'
                    placeholder={placeholder}
                    onChange={this.onSearch}
                    value={this.state.searchText} />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={onFilterChange} />
            </div>
        )
    }

}

export default SearchPanel