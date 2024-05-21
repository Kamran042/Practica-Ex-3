const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.CONNECTION__STRING)
    .then((resp) => { console.log("DB connection"); })
    .catch((err) => { console.log("db dont connection"); })

app.listen(process.env.PORT, (res) => {
    console.log("Connection PORT 8080");
})

const productShema = mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    author: {
        type: String
    },
    authorImg: {
        type: String
    },
    price: {
        type: Number
    },
    count: {
        type: Number
    },
    totalPrice: {
        type: Number
    },

},
    {
        timestamps: true
    })

const Products = mongoose.model("Examthree", productShema)

app.get("/api/examenthree", async (req, res) => {
    const resp = await Products.find()
    res.send(resp)
})

app.post("/api/examenthree", async (req, res) => {
    const { title, img, desc, author,authorImg, price, count, totalPrice } = req.body
    const newProduct = new Products({
        title:title,
        img:img,
        desc:desc,
        author:author,
        authorImg:authorImg,
        price:price,
        count:count,
        totalPrice:totalPrice,
    })
    await newProduct.save()
    res.send("Item created")
})

app.put("/api/examenthree/:id", async (req, res) => { 
    const {id} = req.params
    await Products.findByIdAndUpdate(id,{...req.body})
    res.send("Item Update")
})

app.delete("/api/examenthree/:id", async (req, res) => {
    const {id} = req.params
    const resp = await Products.findByIdAndDelete(id)
    res.send("Item deleted");
 })