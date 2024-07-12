import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/by-category/:categoryId" element={<ByCategoryPage/>}/>
                    <Route path="/blog-details/:blogId" element={<DetailsPage/>}/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}

export default App
