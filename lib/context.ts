import { createContext } from "react"
import { User } from "../models/Users.interface"


export const UserContext = createContext<User>({ user: null, username: null })
