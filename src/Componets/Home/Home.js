import React, { useState,useEffect} from 'react'
import axios from 'axios'
import {Col, Carousel, Row} from 'react-bootstrap'
import './home.css'
import HomeProducts from './Home-product-cards/HomeProducts'


const Home = () => {

const [productCarousel , setProductCarousel] = useState([])
const  [homeProducts, setHomeProducts] = useState ([])
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((responseData) => setProductCarousel(responseData.data))
      .catch(error => console.log(error.message));
      setIsLoading(false)
  },[]);

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then(response => setHomeProducts(response.data))
    .catch(error => console.log(error.message))
    setIsLoading(false)
  },[])

  return (
    <div className='homePage'>
     
       {isLoading && <h5>Loading.....</h5>}
       <Col lg={8} className="carousel-display">
            <Carousel interval={700} fade>
              {productCarousel.map((carouselProductData) => (
                <Carousel.Item key={carouselProductData.id}>
                    <img src={carouselProductData.images} alt='carousel products'/> 
                    <Carousel.Caption>
                      <h2>{carouselProductData.title}</h2>
                      <p>{carouselProductData.description}</p>
                    </Carousel.Caption>
                
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          
          <Row>
            
            
                 {homeProducts.map(productItem =>(
                      <Col className='home-product-item' key={productItem.id}>
                      <HomeProducts productInfo={productItem} />
                      </Col>
                      
                 ))}
           
          

          </Row>
          
         
    </div>
  )
}

export default Home
