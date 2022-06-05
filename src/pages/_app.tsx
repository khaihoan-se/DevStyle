import '../styles/index.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/layouts/BaseLayout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         <BaseLayout>
            <Component {...pageProps} />
         </BaseLayout>
      </ThemeProvider>
   )
}

export default MyApp
