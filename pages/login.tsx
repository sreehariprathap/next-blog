import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth"
import React, { useContext } from "react"
import toast from "react-hot-toast"
import { UserContext } from "../lib/context"
import { auth, provider } from "../lib/firebase"

const Login = (props: any) => {
  const { user, username } = useContext(UserContext)

  return (
    <>
      <main className="flex justify-center items-center mt-10">
        <div className="card  bg-slate-100 shadow-md xsm:w-10/12 lg:w-5/12 h-[50vh] p-10 flex justify-evenly">
          <div className="flex justify-center">
            {user ? (
              !username ? (
                <UsernameForm />
              ) : (
                <SignOutButton />
              )
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

//sign in button
const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.message)
      })
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-black text-center xsm:text-xl lg:text-3xl font-light">
        Click below to login{" "}
      </h2>
      <button className="btn" onClick={signInWithGoogle}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          className="w-10 h-10"
        />
      </button>
    </div>
  )
}
//sign out button
const SignOutButton = () => {
  return (
    <button
      type="button"
      className="btn btn-error"
      onClick={() =>
        signOut(auth).then(() => {
          console.log("success")
        })
      }
    >
      sign out
    </button>
  )
}
// if user signed in but missing username ?
const UsernameForm = () => {
  return <></>
}

export default Login
