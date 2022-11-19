import { createContext } from "react"
import { User } from "../models/Users.interface"


export const UserContext = createContext<any>({ user: null, username: null })
