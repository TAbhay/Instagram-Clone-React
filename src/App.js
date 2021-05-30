import React from 'react';
import {Switch , Route}  from 'react-router-dom';
import Login from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import  Home from './Pages/Home/Home';
import './App.css';
class App extends React.Component {
  state = {
    isLog : false
  }
  loginHandler = (isLog) => {
    this.setState({isLog});
    console.log(isLog);
  }
 render() {
   const {isLog} = this.state;
  return (
    <div>
      <Switch>
          {
          !isLog ?
          <Route exact path='/' render={() => <Login isLog={this.loginHandler}/>}/>
            :
          <Route path='/' render={() =><Home isLoggedIn={this.loginHandler}/> }/>
          }
        <Route path='*' component={ErrorPage}/>
      </Switch>
      </div>
  );
 }
}

export default App;
