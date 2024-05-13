import { Component } from 'react'
import './item-add-form.css'

class ItemAddForm extends Component {

    addItem = this.props

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({ label: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label || 'new task')
        this.setState({ label: '' })
    }

    render() {
        return (
            <form
                className='item-add-form__wrapper'
                onSubmit={this.onSubmit}>
                <input
                    className='item-add-form__input form-control'
                    type='text'
                    placeholder='new task'
                    onChange={this.onLabelChange}
                    value={this.state.label} />
                <button className='btn btn-success'>
                    Add item
                </button>
            </form>
        )
    }

}

export default ItemAddForm