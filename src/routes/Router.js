import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/SignUpPage/LoginPage"
import FeedPage from "../pages/Feed/FeedPage"
import PostPage from "../pages/Post/PostPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path = "register" element ={<RegisterPage />}  />
                <Route path = "feed" element ={<FeedPage />}  />
                <Route path = "feed/posts/:id/comments" element ={<PostPage />}  />
            </Routes>
        </BrowserRouter>
    )
}