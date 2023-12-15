import React, { useEffect,useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProductActionDispatch } from '../Redux/Actions/productActions'
import ProductCardsFormat from './ProductCardsFormat'
import {Col,Row} from 'react-bootstrap'
import { serchContext } from '../../App'

const Product = () => {
  const dispatch = useDispatch()
  const product_list = useSelector(state => state.fetchProduct.productsList)

  const serch = useContext(serchContext)
  useEffect(()=>{
        dispatch(fetchProductActionDispatch())
       
  },[dispatch])
  return (
    <>
    <Row className='gap-3 product-Item'>

   
      {
        product_list.filter(productItem =>{
                 return (serch.toLowerCase() ==='')? productItem: productItem.title.toLowerCase().includes(serch.toLowerCase()) }).map(product_Item =>( 
              
          <Col  className='col col-lg-5 col-md-12' key={product_Item.id}>
             <ProductCardsFormat productInfo={product_Item}/>
          </Col>
        ))
      }
       </Row>
    </>
  )
}

export default Product
