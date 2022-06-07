import React, { useEffect, useState } from "react";
import Logo from '../shared/Logo';
import NavItem from '../shared/NavItem';
import classNames from 'classnames'
import Button from '../shared/Button';
import Link from 'next/link';
import { TbShoppingCart } from "react-icons/tb";
import { useTheme } from 'next-themes'
import { RiMoonCloudyLine, RiSunCloudyLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import { TbUser, TbLogout } from "react-icons/tb";
import axios from "axios";

const transition = { duration: 0.4, ease: [ 0.43, 0.13, 0.23, 0.96 ]}

const MENU_LIST = [
   { title: 'Home', href: '/' },
   { title: 'Products', href: '/products' },
   { title: 'Contacts', href: '/contacts' },
]

const Header = () => {
   const auth = useSelector((state: any) => state.auth);

   const { user, isLogged } = auth;

   const { systemTheme, theme, setTheme } = useTheme();

   const [ mounted, setMounted ] = useState<boolean>(false);

   const [openModule, setOpenModule] = useState(false)

   useEffect(() => {
      setMounted(true);
   }, [])

   const renderThemeChanger = () => {
      if(!mounted) return null;

      const currentTheme = theme === 'system' ? systemTheme : theme;

      if(currentTheme === 'dark') {
         return (
            <motion.div
               initial={{ y: 0, x: 30 }}
               animate={{ y: 0, x: 0 }}
               exit={{ y: 0, x: 30 }}
               transition={transition}
               className="w-full h-full flex items-center justify-center"
               onClick={() => setTheme('light')}
            >
               <RiSunCloudyLine className="text-xl" />
            </motion.div>
         )
      } else {
         return (
            <motion.div
               initial={{ y: 0, x: 30 }}
               animate={{ y: 0, x: 0 }}
               exit={{ y: 0, x: 30 }}
               transition={transition}
               className="w-full h-full flex items-center justify-center"
               onClick={() => setTheme('dark')} 
            >
               <RiMoonCloudyLine className="text-xl" />
            </motion.div>
         )
      }
   }
   // State isTop
   const [ istop, setIstop ] = useState<boolean>(false);

   useEffect(() => {
      const handleIsTop = () => {
          setIstop(window.scrollY > 0);
      }
      document.addEventListener('scroll', handleIsTop);
   }, [])

   const handleLogout = async () => {
      try {
         await axios.get('user/logout');
         localStorage.removeItem('firstLogin')
         window.location.href = "/"
      } catch (error) {
         window.location.href = "/"
      }
   }
   return (
      <header
         className={classNames(
            "px-4 md:px-12 flex items-center justify-between h-20 w-full z-50 transition bg-white dark:bg-black",
            istop && "fixed top-0 ease-in-out duration-500"
         )}
      >
         {/* Logo */}
         <div className="relative h-10 w-10 mr-2 md:mr-6">
            <NavItem href="/">{() => <Logo className="!w-full !h-full" />}</NavItem>
         </div>
         <div className="md:flex hidden flex-1 items-center h-full">
            {
               MENU_LIST.map((menu: any) => (
                  <NavItem href={menu.href} key={menu.href} className="h-full">
                     {({ isActive }) => (
                        <p
                           className={classNames(
                              "mx-4 transition duration-300 h-full relative flex items-center justify-center",
                              isActive && "menu__active dark:after:bg-white dark:before:bg-white"
                           )}
                        >
                           {menu.title}
                        </p>
                     )}
                  </NavItem>
               ))
            }
         </div>
         <div className="flex items-center">
            <div className="md:mr-8 mr-4 relative">
               <Link href='/card'>
                  <>
                     <Button
                        className="w-10 h-10 flex items-center justify-center border-[1px] border-black dark:border-white rounded-full outline-none"
                     >
                        <TbShoppingCart className="text-xl" />
                     </Button>
                     <span className="w-6 h-6 bg-black dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px] text-xs">5</span>
                  </>
               </Link>
            </div>
            <div className="md:mr-8 mr-4 w-10 h-10 rounded-lg flex items-center justify-center border border-black dark:border-white cursor-pointer overflow-hidden">
               {renderThemeChanger()}
            </div>
            <div className={classNames(
               "flex items-center justify-center",
               isLogged ? "p-[3px] border-2 border-[#d89852] rounded-full" : ""
            )}
               onClick={() => setOpenModule(!openModule)}
            >
               {
                  isLogged ? (
                     <div className="relative w-10 h-10 rounded-full cursor-pointer">
                        <img src={user.avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        {openModule && (
                           <div className="dark:bg-[#0d0e10] bg-[#fafafa] min-w-[250px] shadow-md absolute z-50 right-[-5px] top-[60px] p-4 rounded-md">
                              <div className="w-full flex items-center p-2 rounded-md mb-4">
                                 <div className="relative w-12 h-12">
                                    <img src={user.avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                                 </div>
                                 <div>
                                    <p className="ml-4">{user.name}</p>
                                    <p className="ml-4 text-xs">{user.email}</p>
                                 </div>
                              </div>
                              <div className="p-2 flex items-center dark:hover:bg-[#292a2b] hover:bg-[#e8e8ef] rounded-md">
                                 <TbUser className="text-2xl" />
                                 <span className="ml-2">Profile</span>
                              </div>
                              <div className="p-2 flex items-center dark:hover:bg-[#292a2b] hover:bg-[#e8e8ef] rounded-md"
                                 onClick={handleLogout}
                              >
                                 <TbLogout className="text-2xl" />
                                 <span className="ml-2">Logout</span>
                              </div>
                           </div>
                        )}
                     </div>
                  ) : (
                     <Link href='/login'>
                        <Button 
                           className="button__aff--home md:min-w-[100px] min-w-[70px] border-[1px] border-black dark:border-white rounded-md outline-none px-4 py-2 text-sm flex items-center justify-center relative dark:after:bg-black dark:before:bg-black"
                        >
                           Login
                        </Button>
                     </Link>
                  )
               }
            </div>
         </div>
      </header>
   )
}

export default Header;