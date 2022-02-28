import React, {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
const Products = ()=> {
    const [products, handleProducts] = useState([])
    axios.get("https://practiceapi.devmountain.com/products").then(res=>{
    handleProducts(res.data) 
    // console.log(res.data)
    // console.log(products)
    }) 
    let productData = products.map((elem, index) => {
        if(elem.image){
            return(
                <Link key={index} to={`/details/${elem.id}`}>
                    <img width="200" src={elem.image}/>
                </Link>
            )
        }
    }) 
    return(
    <div>
        <h1>Products</h1>
        {productData}
    </div>
    )
}

export default Products