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
    open: false,
    setOpen: () => {},
    openSearch: false,
    setOpenSearch: () => {},
})

export function DashboardProvider({ children }: OpenProviderProps) {

    //NavigationProvider
    const [open, setOpen] = useState<boolean>(false)
    //SearchBarProvider
    const[openSearch, setOpenSearch] = useState<boolean>(false)



    // pageWidth
    const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth || 0);
    useEffect(() => {
        const handleResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);

            if (newScreenWidth > 1150) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        // Adiciona o ouvinte de evento durante a montagem do componente
        window.addEventListener('resize', handleResize);

        // Remove o ouvinte de evento quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
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