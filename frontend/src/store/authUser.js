import axios from "axios"
import toast from "react-hot-toast"
import { create } from "zustand"

export const useAuthStore = create((set) => ({
  user: null,
  isSignUp: false,
  isCheckingAuth: true,
  signup: async (credentials) => {
    set({ isSignUp: true })
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials)
      set({ user: response.data.user, isSigningUp: false })
      toast.success("Sign up successfull")
    } catch (error) {
      toast.error(error.response.data.message || "An error occured")
      set({ isSignUp: false, user: null })
    }
  },
  login: async () => {},
  logout: async () => {},
  authCheck: async () => {
    set({ isCheckingAuth: true })
    try {
      const response = axios.get("/api/v1/auth/authCheck")
      set({ user: response.data.user, isCheckingAuth: false })
    } catch (error) {
      set({ user: null, isCheckingAuth: false })
    }
  },
}))
