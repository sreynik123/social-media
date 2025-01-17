
import { Col, Container, Row,  } from 'react-bootstrap';
import './App.css'

import FeaturedCard from './FeaturedCard';

  function WithHeaderStyledExample() {
    return (

      <>
      <Container  >
<Row>
  
 <Col  lg={3}  >
 <FeaturedCard/>
 </Col>

 <Col lg={3} >
 <FeaturedCard/>
 </Col>

  
 <Col lg={3} >
 <FeaturedCard/>
 </Col>

  
 <Col lg={3} >
 <FeaturedCard/>
 </Col>

  
 <Col lg={3} >
 <FeaturedCard/>
 </Col>

 <Col lg={3} >
 <FeaturedCard/>
 </Col>

 <Col lg={3} >
 <FeaturedCard/>
 </Col>

 <Col lg={3} >
 <FeaturedCard/>
 </Col>

</Row>
      </Container>
      
      </>
    );
  }
  {(WithHeaderStyledExample)}
  


export default WithHeaderStyledExample;