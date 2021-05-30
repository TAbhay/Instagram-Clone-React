import React from 'react';
import Header from '../../components/Header/Header';
import {Switch ,Route} from 'react-router-dom';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore';
import {useHistory} from 'react-router-dom';
const Home = (props) => {
    console.log(props.isLoggedIn);
    let history = useHistory();
    const getValue = (value) => {
        props.isLoggedIn(value);
        history.push('/');
    }
    return(
        <div >
         <Header isLoggedIn={getValue}/>
         <Switch>
             <Route exact path="/" render = {(props) => ( 
             <NewHome 
             {...props}
             isLoggedIn = {props.isLoggedIn}
             /> 
             )}  
             />
             <Route  exact path="/explore" component = {Explore} />
         </Switch>
        </div>
           
       
    );
}
export default Home;