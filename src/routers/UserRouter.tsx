import { Navigate, RouteObject } from "react-router";
import UserLayout from "../layouts/UserLayout";
import { AllBooksPages, AuthorPages, HomePages, MyBookPages, ReviewPages } from "../pages/users";
// import HomeContent from "../components/HomeContent";

const UserRouter : RouteObject[] = [
    {
        index: true,
        element: <Navigate to={"home"}/>,
    },
    {
        path : "/",
        element: <UserLayout/>,
        children: [
            {
                path: "home",
                element: <HomePages/>,
                children: [
                    {
                        path: "one",
                        element: <div>one</div>
                    },
                    {
                        path: "two",
                        element: <div>two</div>
                    },
                    {
                        path: "three",
                        element: <div>three</div>
                    },
                ]
            },
            {
                path: "all-books",
                element: <AllBooksPages/>
            },
            {
                path: "authors",
                element: <AuthorPages/>
            },
            {
                path: "my-books",
                element: <MyBookPages/>
            },
            {
                path: "reviews",
                element: <ReviewPages/>
            },
        ]
    }
]

export default UserRouter;