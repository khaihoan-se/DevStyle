import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import NProgress from "nprogress";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { dispatchLogin, fetchUser, dispatchGetUser } from '@/redux/actions/authAction';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";


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
   const containerRef = useRef(null);
   const dispatch = useDispatch();
   const token = useSelector((state: any) => state.token)
   const auth = useSelector((state: any) => state.auth)

   useEffect(() => {
      const firstLogin = localStorage.getItem('firstLogin')

      if(firstLogin) {
         const getToken = async () => {
            try {
               const res = await axios.post('/user/refresh_token', null, {
                  headers: {
                      Cookie: "refreshtoken=value"
                  }
               })
               dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
               
                  
            } catch (error) {
               console.log(error);
               
            }
         }
         getToken()
      }
   },[auth.isLogged, dispatch])

   useEffect(() => {
      if(token) {
         const getUser = () => {
            dispatch(dispatchLogin());
            return fetchUser(token).then(res => {
               dispatch(dispatchGetUser(res))
            })
         }
         getUser();
      }
   }, [token, dispatch])

   // Scrolling
   return (
      <LocomotiveScrollProvider
         options={{
            smooth: true,
            tablet: {
            smooth: true,
            breakpoint: 768,
            },
         }}
         watch={[]}
         containerRef={containerRef}
      >
      <AnimatePresence>
         <main data-scroll-container ref={containerRef} className="overflow-hidden">
            { router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/user/activate/[params]' ? null : <Header /> }

            <div className="app">{children}</div>

            { router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/user/activate/[params]' ? null : <Footer /> }
         </main>
      </AnimatePresence>
      </LocomotiveScrollProvider>
   )
}
export default BaseLayout