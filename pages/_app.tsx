import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "../components/NavBar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import useUserData from "../lib/hooks"
import Sidebar from "../components/Sidebar"
import SuggestionsBar from "../components/SuggestionsBar"
/* Mui  */
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export default function App({ Component, pageProps }: AppProps) {
  const userData = useUserData()
  return (
    <UserContext.Provider value={userData}>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Component {...pageProps} />
        </div>
        <SuggestionsBar />
      </div>
      <Toaster />
    </UserContext.Provider>
  )
}
