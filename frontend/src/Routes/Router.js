import SiteRoot from "../Pages/Site/SiteRoot"
import AdminRoutes from "../Pages/Admin/AdminRoutes"
import Add from "../Pages/Admin/Add/Add"
import Products from "../Pages/Admin/Products/Products"
import Home from "../Pages/Site/Home/Home"
import Basket from "../Pages/Site/Basket/Basket"
import Wishlist from "../Pages/Site/Wishlist/Wishlist"
import Detail from "../Pages/Site/Detail/Detail"

const ROUTES = [{
    path: "/",
    element: <SiteRoot />,
    children: [{
        path: "",
        element: <Home />,
    },
    {
        path: "basket",
        element: <Basket />,
    },
    {
        path: "wishlist",
        element: <Wishlist />,
    },
    {
        path: "detail/:_id",
        element: <Detail />,
    }]
},
{
    path: "/admin",
    element: <AdminRoutes />,
    children: [{
        path: "add",
        element: <Add />,

    },
    {
        path: "",
        element: <Products />,

    }
    ]
}]

export default ROUTES