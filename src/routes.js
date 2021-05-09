import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import CartPage from './pages/CartPage/CartPage';
import CartSuccessPage from './pages/CartSuccessPage/CartSuccessPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import AddProduct from './pages/AddProduct/AddProduct';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ()=> <AddProduct />
    },
    {
        path: '/search',
        exact: false,
        main: ()=> <SearchPage/>
    },
    {
        path: '/cart/success',
        exact: false,
        main: () => <CartSuccessPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    
    {
        path: '/product/:id',
        exact: false,
        main: ({match}) => <ProductDetailPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;