import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "../components/NavBar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import useUserData from "../lib/hooks"

export default function App({ Component, pageProps }: AppProps) {
  const userData = useUserData()
  return (
    <div >
      <UserContext.Provider value={userData}>
        <NavBar />
            <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </div>
  )
}
