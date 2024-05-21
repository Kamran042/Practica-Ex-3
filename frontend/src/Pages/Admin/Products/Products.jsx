import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../Context/Context'
import axios from 'axios'

const Products = () => {
  const { data, setData } = useContext(MainContext)

  function deleteOfDataBase(_id){
    axios.delete(`http://localhost:8080/api/examenthree/${_id}`)
    const target = data.find((x)=> _id == _id)
    const targetOfIndex = data.indexOf(target)
    data.splice(targetOfIndex)
    setData([...data])
  }
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <table className="table table-hover table-dark ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">IMG</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Author IMG</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td><img src={item.img} width={"60px"} height={"60px"} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td><img src={item.authorImg} alt="" width={"60pcx"}  height={"60px"}/></td>
                <td>{item.desc}</td>
                <td>{item.price} $</td>
                <td><button className='btn btn-danger  ' onClick={()=>{
                  deleteOfDataBase(item._id)
                }}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Products
