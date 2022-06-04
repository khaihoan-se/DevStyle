import { NextPage } from "next";
import { motion } from 'framer-motion';
import Link from "next/link";

const HomePage: NextPage = () => {
   return (
      <div>Home Page React DevStyle!!!<Link href='/login'>Login</Link></div>
   )
}

export default HomePage;