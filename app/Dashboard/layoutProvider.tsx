"use client"
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

interface OpenProviderProps {
  children: ReactNode;
}

interface OpenContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
    openSearch: boolean;
    setOpenSearch: (value: boolean) => void;
}
  
const OpenContext = createContext<OpenContextType>({
    open: true,
    setOpen: () => {},
    openSearch: false,
    setOpenSearch: () => {},
})

export function DashboardProvider({ children }: OpenProviderProps) {

    //NavigationProvider
    const [open, setOpen] = useState<boolean>(true)
    //SearchBarProvider
    const[openSearch, setOpenSearch] = useState<boolean>(false)
    
    return (
        <OpenContext.Provider 
        value={{ open, setOpen, setOpenSearch, openSearch }}
        >
        {children}
        </OpenContext.Provider>
    )
}


export function DashboardContext() {
    const context = useContext(OpenContext)
    return context 
}