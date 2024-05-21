

import React from 'react';
import { useFormik } from 'formik';
import { Helmet } from 'react-helmet'
import "./Add.scss"
import axios from "axios"



const Add = () => {

  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      desc: "",
      author: "",
      authorImg: "",
      price: "",
    },
    onSubmit: values => {
      axios.post("http://localhost:8080/api/examenthree", {
        title: values.title,
        img: values.img,
        desc: values.desc,
        author: values.author,
        authorImg: values.authorImg,
        price: values.price,
        count: 1,
        totalPrice: values.price,
      })
    },
  });
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <form className='from_add' onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}

        <label htmlFor="img">Card Img (URL):</label>
        <input
          id="img"
          name="img"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.img}
        />
        {formik.errors.img ? <div>{formik.errors.img}</div> : null}

        <label htmlFor="desc">Description:</label>
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
        {formik.errors.desc ? <div>{formik.errors.desc}</div> : null}

        <label htmlFor="author">Author Full Name:</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {formik.errors.author ? <div>{formik.errors.author}</div> : null}

        <label htmlFor="authorImg">Author Img (URL):</label>
        <input
          id="authorImg"
          name="authorImg"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.authorImg}
        />
        {formik.errors.authorImg ? <div>{formik.errors.authorImg}</div> : null}

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price ? <div>{formik.errors.price}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </>

  );
};

export default Add