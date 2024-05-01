import { RouteObject } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPages, SignUpPages } from "../pages/auths";

const AuthRouter : RouteObject[] = [
   {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <LoginPages/>,
            },
            {
                path: "signup",
                element: <SignUpPages/>
            }
        ]
   } 
]

export default AuthRouter;