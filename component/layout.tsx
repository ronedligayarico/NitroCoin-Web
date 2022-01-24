import Head from 'next/head'
import Footer from "./footer"
import Navigation from "./navigation"

const Layouts = ({ children }) => {
    return (
        <>
       <Head>
         <title>Nitro Coin</title>
         <link rel="icon" href="/nitro.ico" />
         <meta name="description" content="Nitro Coin"/>
         <meta property="og:title" content="Nitro Coin"/>
         <meta property="og:description" content="Nitro Coin"/>
         <meta property="og:url" content="https://www.nitrocoin.ph/"/>
         <meta property="og:type" content="website"/>
         {/* <meta property="og:image" content="/ogimage.png" /> */}
         {/* <meta property="og:image:secure" content="/PayAfter-Original.png" /> */}
         <meta property="fb:app_id" content="215115970434283" />
         <meta property="og:locale" content="en-US" />
         <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"></script>
       </Head>
        <Navigation></Navigation>
           <main className="main-bg bg-color">{children}</main>
        <Footer></Footer>
        </>
    )
}


export default Layouts;