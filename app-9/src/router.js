import React from "react"
import {Routes, Route} from "react-router-dom"

import Home from "./Home.js"
import Details from "./Details.js"
import Signup from "./Signup.js"


export default(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/details" element={<Details/>} />

    </Routes>
)