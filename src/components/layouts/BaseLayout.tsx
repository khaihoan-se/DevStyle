import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

interface BaseLayoutProps {
   children: React.ReactNode,
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ 
   children,
}) => {
   const router = useRouter();

   return (
      <AnimatePresence>
         <main>
            { router.pathname === '/login' || router.pathname === '/register' ? null : <Header /> }

            <div className="app">{children}</div>

            { router.pathname === '/login' || router.pathname === '/register' ? null : <Footer /> }
         </main>
      </AnimatePresence>
   )
}

export default BaseLayout