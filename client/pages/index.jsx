import Head from 'next/head'
import Link from 'next/link'
import Styles from '../components/Styles'
import { useEffect, useState } from 'react'

export default function Home() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Assesment Front End</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        {
          token
          ?
          <h1 className="title">
            Welcome to this Landing Page!
          </h1>
          : 
          <>
          <h1 className="title">
            Welcome to this Page!
          </h1>
          
          <div className="grid">

          <Link href="/login">
            <a className="card">
              <h3>Login</h3>
              <p>Already have an account?</p>
            </a>
          </Link>
          
          Or

          <Link href="/register">
            <a className="card">
              <h3>Register</h3>
              <p>Don't have any account?</p>
            </a>
          </Link>

          </div>

          </>
          
        }

      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}

      <Styles />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
