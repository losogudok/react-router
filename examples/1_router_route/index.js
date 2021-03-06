import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import createHistory from 'history/createHashHistory'

const history = createHistory()

const App = () => (
    <Router history={history}>
        <div>
            <Route path='/recipes' component={RecipesList} />
            <Route path='/new' component={NewRecipe} />
        </div>
    </Router>
)


const RecipesList = () => (
    <div>
        <h1>
            Рецепты
        </h1>
        <ul>
            <li>Борщ</li>
            <li>Утка по-пекински</li>
            <li>Рыбы Фуга</li>
        </ul>
    </div>
)

const NewRecipe = () => (
    <div>
        <div>Новый рецепт</div>
        <textarea name='recipe' id='recipe' cols="30" rows="10" placeholder='Напиши свой рецепт'></textarea>
    </div>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)