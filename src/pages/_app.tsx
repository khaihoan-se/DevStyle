import '../styles/index.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/layouts/BaseLayout'
import { ThemeProvider } from 'next-themes'
import { Provider } from "react-redux";
import store from "@/redux";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <ThemeProvider enableSystem={true} attribute="class">
            <BaseLayout>
               <Component {...pageProps} />
            </BaseLayout>
         </ThemeProvider>
      </Provider>
   )
}

export default MyApp
