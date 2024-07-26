import { Button,  Col, Container, Row } from 'reactstrap'
import product from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Services =()=>{



    return<Container>
         <Row>
       {product.map(item=>(
        <Col  className='text-danger' sm={12} md={3} key={item.id}>
            <Link to={`/services/${item.id}`}><Button className=' btn btn-danger'> {item.name}</Button></Link>
        </Col> 
       ))}
    </Row>
    </Container>

}
export default Services