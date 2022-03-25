import React from 'react';
import {Outlet,NavLink} from 'react-router-dom'
import {Container,Col,Row,Card,Form,Button} from 'react-bootstrap';
export default class UserAuth extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={9} lg={12} xl={10} >
            <Card className="card shadow-lg o-hidden border-0 my-5">
            <Card.Body className="p-0">
         
              <Row>
                <Col lg={6} className="d-none d-lg-flex">
                <div ref={this.imgdiv} className="flex-grow-1 bg-login-image"></div>
                </Col>
  
                <Col lg={6}>
                   <div className="p-5">
                        <Outlet/>
                   </div>
                </Col>
              </Row>
             
            </Card.Body>
          </Card>
            </Col>
          </Row>
        </Container>
      </div>

        )
    }

}