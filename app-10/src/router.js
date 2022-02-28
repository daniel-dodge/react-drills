import Details from "./Details.js"
import Products from "./Products.js"
import {Routes, Route} from "react-router-dom"
import React from "react"

export default(
    <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/details/:id" element={<Details/>}/>
    </Routes>
)