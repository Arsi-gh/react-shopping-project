import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import DashboardLayout from './Layout/DashboardLayout'
import MainDashboard from './Components/Dashboard/User/MainDashboard'
import UsersList from './Components/Dashboard/Admin/UsersList'
import ProductsList from './Components/Dashboard/Admin/ProductsList'
import AddProdPage from './Components/Dashboard/Admin/AddProdPage'
import AdminTicketsPage from './Components/Dashboard/Admin/AdminTicketsPage'
import TransactionPage from './Components/Dashboard/Admin/TransactionPage'
import AdminOffCodePage from './Components/Dashboard/Admin/AdminOffCodePage'
import OrdersPage from './Components/Dashboard/User/OrdersPage'
import EditAccountPage from './Components/Dashboard/User/EditAccountPage'
import TicketsPage from './Components/Dashboard/User/TicketsPage'
import Basket from './Pages/Basket'
import About from './Pages/About'
import Subscription from './Pages/Subscription'
import Documents from './Pages/Documents'
import Products from './Pages/Products'
import Product from './Pages/Product'
import Index from './Pages/Index'
import Login from './Pages/authentication/Login'
import Signup from './Pages/authentication/Signup'
import AuthenticationLayout from './Layout/AuthenticationLayout'

function App() {

  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Index/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:prodId" element={<Product/>} />*
          <Route path="/documents" element={<Documents/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="/basket" element={<Basket/>} /> 
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<MainDashboard/>} />
            <Route path='dashboard/users' element={<UsersList/>} />
            <Route path="/dashboard/products" element={<ProductsList/>} />
            <Route path="/dashboard/addproduct" element={<AddProdPage/>}/>
            <Route path="/dashboard/tickets" element={<AdminTicketsPage/>}/>
            <Route path="/dashboard/transactions" element={<TransactionPage/>}/>
            <Route path="/dashboard/offcode" element={<AdminOffCodePage/>}/>
            <Route path="/dashboard/orders" element={<OrdersPage/>} />
            <Route path="/dashboard/edit-account" element={<EditAccountPage/>}/>
            <Route path="/dashboard/tickets" element={<TicketsPage/>} />
            <Route path="/dashboard/agents" />
          </Route>
        </Route>
        <Route path="/login" element={<AuthenticationLayout><Login/></AuthenticationLayout>} />
        <Route path="/signup" element={<AuthenticationLayout><Signup/></AuthenticationLayout>} />
    </Routes>
  )
}

export default App
