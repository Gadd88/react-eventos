import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "../components/Form/SignUpForm";
import Error404 from "../views/error/Error404";
import EventDetailView from "../views/EventDetailView";
import Home from "../views/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: (<Home/>),
        errorElement: (<Error404/>)
    },
    {
        path:'/signup',
        element: (<SignUpForm/>)
    },
    {
        path:'/detail/:eventId',
        element: (<EventDetailView/>)
    }
])

const MyRoutes = () => {

    return(
        <RouterProvider router={router}/>
    )
}

export default MyRoutes