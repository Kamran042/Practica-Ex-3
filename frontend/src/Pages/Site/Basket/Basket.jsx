import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import "./Basket.scss"
import MainContext from '../../../Context/Context';


const Basket = () => {
  const { basket, setBasket } = useContext(MainContext)
  function increaseProductOfBasket(item) {
    item.count++
    item.totalPrice += item.price
    setBasket([...basket])

  }
  function decreaseProductOfBasket(item) {
    if (item.count > 1) {
      item.count--
      item.totalPrice -= item.price
      setBasket([...basket])
    } else {
      const target = basket.indexOf(item)
      basket.splice(target, 1)
      setBasket([...basket])

    }
    setBasket([...basket])

  }
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <table className="table table-hover table-dark basket__table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">IMG</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {
            basket.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.img} width={"60px"} height={"60px"} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td><button onClick={() => {
                  increaseProductOfBasket(item)
                }} className='btn btn-warning'>+</button></td>
                <td>{item.count}</td>
                <td><button
                  onClick={() => {
                    decreaseProductOfBasket(item)
                  }} className='btn btn-danger'>-</button></td>
                <td>{item.totalPrice}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Basket
