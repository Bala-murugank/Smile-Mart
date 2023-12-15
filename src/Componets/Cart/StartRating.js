import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import './startRating.css'

const StartRating = ({rating}) => {

     const ratingStart = Array.from({length :5}, (ele, index) =>{
        let number = index + 0.5

        return <span key={index}>
           {
            rating >= index +1 ? <FaStar className='star-icon' /> : rating >= number ? <FaStarHalfAlt className='star-icon' /> : <AiOutlineStar className='star-icon' />
           }
        </span>
     })
  return (
    <>
       {
        ratingStart
       }
      
    </>
  )
}

export default StartRating
