import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';

interface BaseLayoutProps {
   children: React.ReactNode,
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ 
   children,
}) => {
   return (
      <main>
         <Header />

         <div className="app">{children}</div>

         <Footer />
      </main>
   )
}

export default BaseLayout