import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import SupplierLogin from '../pages/Supplier/SupplierLogin'
import AdminLogin from '../pages/Admin/AdminLogin'
import Home from '../pages/Home/Home'

function Path() {
  return (
    <div>
        <BrowserRouter>      
        
           <Routes>
               <Route element={<SupplierLogin/>} path="/supplierLogin"/>
               <Route element={<AdminLogin/>} path='/adminLogin'/>
           </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Path
