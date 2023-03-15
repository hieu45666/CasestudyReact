import Disease from "../component/ChildComponent/Disease";
import Product from "../component/ChildComponent/Product";
import Slider from "../component/ChildComponent/Slider";

export const routers = [
    {
        path: "/",
        element: <Slider/>,
        name: "Home"
    },
    {
        path: "/medicine",
        element: <Product/>,
        name: "Medicine"
    },
    {
        path: "/disease",
        element: <Disease/>,
        name: "Disease"
    },
    {
        path: "/about",
        element: "",
        name: "About"
    },
]