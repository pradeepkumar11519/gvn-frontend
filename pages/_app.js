import '../styles/globals.css'
import React from 'react'

import {QueryClientProvider,Hydrate,QueryClient} from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ContextProvider } from '../Context/Context'
import LoadingBar from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CloseOffCanvasNavbar } from '../Components/OffCanvasNavbar'




function MyApp({ Component, pageProps }) {
  const queryClient = React.useRef(new QueryClient())
  const router = useRouter()
  const [Progress,setProgress] = React.useState(0)
  
  React.useEffect(()=>{
   
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
      CloseOffCanvasNavbar()
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
      
    })
    
  },[])
  return(
    <QueryClientProvider client = {queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ContextProvider>
        <Navbar/>
        <LoadingBar
              color='#E11D48'
              progress={Progress}
              height={5}
              shadowStyle={{'height':'5px','width':'20px'}}
              waitingTime={200}
              onLoaderFinished={() => setProgress(0)}
            />
        
        <div className='mx-10 py-10 lg:mx-auto max-w-[1200px]  '>
        <Component {...pageProps} />
        <div className='w-[200px] break-all'>
        <ToastContainer className="w-[200px] break-all" />
        </div>
        </div>
        <Footer/>
      <ReactQueryDevtools initialIsOpen={false}
              position="bottom-right" />
      </ContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
