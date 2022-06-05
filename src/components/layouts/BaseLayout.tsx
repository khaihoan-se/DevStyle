import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import NProgress from "nprogress";

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

   return (
      <AnimatePresence>
         <main className="overflow-hidden">
            { router.pathname === '/login' || router.pathname === '/register' ? null : <Header /> }

            <div className="app">{children}</div>

            { router.pathname === '/login' || router.pathname === '/register' ? null : <Footer /> }
         </main>
      </AnimatePresence>
   )
}

export default BaseLayout