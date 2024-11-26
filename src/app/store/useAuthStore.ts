/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

interface iUseAuthStore {
    user: any
    setUser: (user: any) => void
}

const useAuthStore = create<iUseAuthStore>((set) => ({
    user: undefined,
    setUser: (newUser: any) => set({ user: newUser })
}))


export { useAuthStore }