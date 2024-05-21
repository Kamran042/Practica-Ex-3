import React, { useContext } from 'react'
import "./Section2.scss"
import MainContext from '../../../Context/Context'
import { Link } from 'react-router-dom'

const Section2 = () => {
    const { data, basket, setBasket,inpVal,setInpVal} = useContext(MainContext)
    function addToBasket(_id) {
        const targetOfBasket = basket.find((x) => x._id == _id)
        if (targetOfBasket) {
            targetOfBasket.count++
            targetOfBasket.totalPrice += targetOfBasket.price
        } else {
            const targetOfData = data.find((x) => x._id == _id)
            basket.push(targetOfData)
        }
        setBasket([...basket])
    }
    return (
        <div className='section__two'>
            <div className="section__two__top">
                <h2>Popular Courses</h2>
            </div>
            <div className="section__two__inp">
                <input placeholder='Search Card By Title' type="text" name="" id="" value={inpVal} onChange={(e) => setInpVal(e.target.value)}/>
            </div>
            <div className="section__two__grid">
                {
                    data.map((item, index) => (
                        <div className="section__two__grid__card" key={index}>
                            <div className="section__two__grid__card__img">
                                <img src={item.img} alt="///" />
                                <div className="section__two__grid__card__img__btn">
                                    <button><Link to={`detail/${item._id}`}><i class="fa-solid fa-circle-info"></i></Link></button>
                                    <button onClick={() => {
                                        addToBasket(item._id)
                                    }}><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                            <div className="section__two__grid__card__title">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="section__two__grid__card__author">
                                <div className="section__two__grid__card__author__left">
                                    <img src={item.authorImg} alt="////" />
                                </div>
                                <div className="section__two__grid__card__author__center">
                                    <h3>{item.author}, <p>Author</p></h3>
                                </div>
                                <div className="section__two__grid__card__author__right">
                                    ${item.price}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Section2
