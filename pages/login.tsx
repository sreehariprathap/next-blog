import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth"
import { doc, getDoc, onSnapshot, writeBatch } from "firebase/firestore"
import React, { useCallback, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { UserContext } from "../lib/context"
import { auth, db, provider } from "../lib/firebase"
import { debounce } from "lodash"
import { async } from "@firebase/util"
import axios from "axios"
import router from "next/router"

const Login = (props: any) => {
  const { user } = useContext(UserContext)

  return (
    <>
      <main className="flex justify-center items-center mt-10">
        <div className="card  bg-slate-100 shadow-md xsm:w-10/12 lg:w-5/12 h-[50vh] p-10 flex justify-evenly">
          <div className="flex justify-center">
            {user ? <SignOutButton /> : <SignInButton />}
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
        var userData = result.user
        axios
          .post("http://localhost:3000/api/users/create", {
            id: userData.uid,
            name: userData.displayName,
            email: userData.email,
            imageUrl: userData.photoURL,
          })
          .then((response: any) => {
            if (response === "user created") {
              toast.success("account created")
            }
            router.push("/")
          })
      })
      .catch((err) => {
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
      className="btn btn-error bg-red-600 text-white"
      onClick={() => signOut(auth)}
    >
      sign out
    </button>
  )
}
// if user signed in but missing username ?
const UsernameForm = () => {
  const [formValue, setFormValue] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const { user, username } = useContext(UserContext)

  useEffect(() => {
    checkUserName(formValue)
  }, [formValue])

  const handleOnchange = (e: any) => {
    const val = e.target.value.toLowerCase()
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    if (val.length < 3) {
      setFormValue(val)
      setLoading(false)
      setIsValid(false)
    }
    if (re.test(val)) {
      setFormValue(val)
      setLoading(true)
      setIsValid(false)
    }
  }
  // check database for username change after debounce change
  const checkUserName = useCallback(
    debounce(async (username: any) => {
      if (username.length > 3) {
        const ref = doc(db, `usernames`, username)
        const docSnap = await getDoc(ref)
        setIsValid(!docSnap.exists())
        setLoading(false)
      }
    }, 500),
    []
  )

  const onSubmit = async (e: any) => {
    e.preventDefault()

    const batch = writeBatch(db)
    //add both user and username to firestore
    const userDoc = doc(db, "users", user.uid)
    const userNameDoc = doc(db, "usernames", formValue)

    //commit both user and username to firestore
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    })
    batch.set(userNameDoc, { uid: user.uid })
    await batch.commit()
  }

  return (
    <>
      <section className="flex flex-col gap-5">
        <h2 className="text-black text-center xsm:text-xl lg:text-3xl font-light">
          Choose your username
        </h2>
        <form onSubmit={onSubmit}>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your username"
              className={`input ${
                formValue.length ? (!isValid ? "input-secondary" : "") : ""
              } w-full max-w-xs`}
              onChange={handleOnchange}
              value={formValue}
            />
            <button className="btn btn-success" disabled={!isValid}>
              Save
            </button>
          </div>
        </form>
        <div>
          {formValue.length
            ? !isValid
              ? "the username is not available"
              : ""
            : ""}
        </div>
      </section>
    </>
  )
}

export default Login
