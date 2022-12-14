import BasketPage from "../pages/BasketPage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";


export const routes = [
    {path: '/', element: MainPage},    
    {path: '/product/:id', element: ProductPage},     
    {path: '/:category', element: MainPage},    
    {path: '/basket', element: BasketPage},  
]