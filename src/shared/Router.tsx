import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Artist from '../pages/Artist'
import Community from '../pages/Community'
import Login from '../pages/Login'
import Mypage from '../pages/Mypage'
import Home from '../pages/Home'
import Layout from '../components/Common/Layout'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path="artist" element={<Artist />} />
                    <Route path="artist" element={<Community />} />
                    <Route path="artist" element={<Login />} />
                    <Route path="artist" element={<Mypage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
