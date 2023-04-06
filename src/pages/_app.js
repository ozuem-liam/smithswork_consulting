import '{  "compilerOptions": {    "baseUrl": ".",    "paths": {      "@components/": ["components/"],      "@styles/": ["styles/"],      "@lib/": styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
