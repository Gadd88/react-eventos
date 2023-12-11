import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignUpForm from "../components/Form/SignUpForm";
import Error404 from "../views/error/Error404";
import EventDetailView from "../views/detailView/EventDetailView";
import Home from "../views/home/Home";
import ProfileView from "../views/profileView/ProfileView";

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
    },
    {
        path: '/profile',
        element: <ProfileView/>,
        children: [
            {
                path: 'my-info',
                element: (<>
                <div>Account Info... on work</div>
                <Link to='/'>Volver</Link>
                </>)
            },
            {
                path: 'liked-events',
                element: <>
                <div>Liked Events... on work</div>
                <Link to='/'>Volver</Link>
                </>
            }
        ]
    }
])

const MyRoutes = () => {

    return(
        <RouterProvider router={router}/>
    )
}

export default MyRoutes