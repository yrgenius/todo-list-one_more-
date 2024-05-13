import './app-header.css'

const AppHeader = ({ toDo, done }) => {
    return (
        <div className='header__wrapper'>
            <h1 className='header__title'> Todo №100</h1>
            <span className='header__text'>Сделано {done},  осталось {toDo}</span>
        </div>
    )
}

export default AppHeader