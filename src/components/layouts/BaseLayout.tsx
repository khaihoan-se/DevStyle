import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import NProgress from "nprogress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import LoginApi from '@/api/LoginApi';


Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeError', NProgress.done)
interface BaseLayoutProps {
   children: React.ReactNode,
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ 
   children,
}) => {
   const router = useRouter();

   const dispatch = useDispatch();
   const token = useSelector((state: any) => state.token)
   const auth = useSelector((state: any) => state.auth)

   useEffect(() => {
      const firstLogin = localStorage.getItem('firstLogin')

      if(firstLogin) {
         const getToken = async () => {
            const res = await axios.post('http://localhost:5000/user/refresh_token', null)
            console.log(res);     
         }
         getToken()
      }
   },[auth.isLogged])

   return (
      <AnimatePresence>
         <main className="overflow-hidden">
            { router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/user/activate/[params]' ? null : <Header /> }

            <div className="app">{children}</div>

            { router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/user/activate/[params]' ? null : <Footer /> }
         </main>
      </AnimatePresence>
   )
}

export default BaseLayout