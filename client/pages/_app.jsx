import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
return (
<>
<Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
</Head>
<Component {...pageProps} />
</>
);
}
export default MyApp;