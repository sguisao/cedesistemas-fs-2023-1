import React, {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {LazyLoading} from '../Components/LazyLoading';

const Home = React.lazy( () => import('../Pages/Home'));
const WearDetail = React.lazy( () => import('../Pages/WearDetail'));
const SingUp = React.lazy( () => import('../Pages/SingUp'));
const Login = React.lazy( () => import('../Pages/Login'));

//Para probar la pagina cargando
/*const Login = React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    }, 10000)
  })
}));*/

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Home />
      </Suspense>
    )
  },
  {
    path:"/wear-detail",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <WearDetail />
      </Suspense>
    )
  }
  ,
  {
    path:"/login",
    element: (
      <Suspense fallback={<LazyLoading />}>
       <Login />
      </Suspense>
    )
  }
  ,
  {
    path:"/singup",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <SingUp />
      </Suspense>
    )
  }
])
