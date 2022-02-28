import React, {useState} from "react"
import axios from "axios"


const Details = (props) => {
    console.log(props)
    const [item, handleItem] = useState({})
    axios.get(`https://practiceapi.devmountain.com/products/9ad1jor`).then(res=>{
        handleItem(res.data)
        console.log(res.data)
    })
    return(

    <div>
        <h2>{item.title}</h2>
        <img width='200' src={item.image} />
        <h4>Price: {item.price}.00</h4>
    </div>
    )
}

export default Details