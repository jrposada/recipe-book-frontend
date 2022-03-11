import { Route, Switch } from 'react-router-dom'

import CreateRecipe from 'pages/create-recipe/create-recipe'
import Home from 'pages/home'
import Recipes from 'pages/recipes'
import User from 'pages/user'

import './main-body.scss'

function MainBody() {
  return (
    <div className="main-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/create-recipe" component={CreateRecipe} />
        <Route exact path="/user" component={User} />
      </Switch>
    </div>
  )
}

export default MainBody
