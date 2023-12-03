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



    // pageWidth
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                const newScreenWidth = window.innerWidth || 0;
                setScreenWidth(newScreenWidth);
    
                if (newScreenWidth > 1150) {
                    setOpen(true);
                } else {
                    setOpen(false);
                }
            }
        };
    
        // Adiciona o ouvinte de evento durante a montagem do componente
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }
    
        // Remove o ouvinte de evento quando o componente for desmontado
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [screenWidth]);
    
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