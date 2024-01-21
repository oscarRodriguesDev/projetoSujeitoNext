
import type { AppProps } from "next/app";
import '../styles/global.scss';
import Header from '../components/Header/index'

const App =({ Component, pageProps }: AppProps)=> {
  return(
    <>
    <Header/>
     <Component {...pageProps} />
    </>
  )
}

export default App