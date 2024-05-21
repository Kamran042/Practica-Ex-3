import React, { useContext } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../Context/Context'
import "./Detail.scss"

const Detail = () => {
    const {data}= useContext(MainContext)
    const {_id} = useParams()
    const traget = data.find((x)=>x._id==_id)
  return (
    <div className='detail'>
      <div className="detail__left">
        <img src={traget.img} alt="" />
      </div>
      <div className="detail__right">
        <h2>Title: {traget.title}</h2>
        <h2>Description: {traget.desc}</h2>
        <h2>Price: {traget.price} $</h2>
        <h2>Author: {traget.author}</h2>
        <img src={traget.authorImg} width={"100px"} height={"100px"} alt="" />
      </div>
    </div>
  )
}

export default Detail
