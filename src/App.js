import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Container,Col,Row,Card,Form,Button} from 'react-bootstrap';
import {NavLink,BrowserRouter,Route,Routes,Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/main';
import UserAuth from './components/user';

class App extends React.Component {
  constructor(props){
    super(props);
    this.imgdiv = React.createRef() ;
    this.changeImg = this.changeImg.bind(this);
  }



  changeImg = (newUrl) =>{
      console.log(this.imgdiv.current);
  }

  render(){
    return (
      <Routes>
                  <Route path="user" element={<UserAuth/>} >
                    <Route path="login" element={<Login cfun={this.changeImg}/>}/>
                    <Route path="register" element={<Register/>} />
                  </Route>

                  <Route path="app"  element={<Main username="pengbo"/>} >
                      <Route path="profile" element={<h1>Profile</h1>}/>
                      <Route path="find" element={<h1>Find</h1>}/>
                    </Route>

                  <Route index element={<Login/ >} />
  
      </Routes>
    );
  }
}

export default App;
