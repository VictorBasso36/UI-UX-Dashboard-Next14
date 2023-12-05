"use client"
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import dayjs from 'dayjs';


interface OpenProviderProps {
  children: ReactNode;
}

interface OpenContextType {
    open: boolean;
    setOpen: (value: boolean) => void;

    openSearch: boolean;
    setOpenSearch: (value: boolean) => void;

    start: Date | null,
    setStart: (value: Date) => void,
    end: Date | null,
    setEnd: (value: Date) => void,
}
  
const OpenContext = createContext<OpenContextType>({
    open: true,
    setOpen: () => {},

    openSearch: false,
    setOpenSearch: () => {},

    start: dayjs().subtract(30, 'days').toDate(),
    setStart: () => {},
    end: dayjs().toDate(),
    setEnd: () => {},
})

export function DashboardProvider({ children }: OpenProviderProps) {

    //NavigationProvider
    const [open, setOpen] = useState<boolean>(true)
    //SearchBarProvider
    const[openSearch, setOpenSearch] = useState<boolean>(false)
    
    //HomeEndDate and HomeStartDate
    const [start, setStart] = useState<Date | null>(dayjs().subtract(30, 'days').toDate());
    const [end, setEnd] = useState<Date | null>(dayjs().toDate());
    console.log(end, start)
    return (
        <OpenContext.Provider 
        value={{ open, setOpen, setOpenSearch, openSearch, end, setEnd, setStart, start }}
        >
        {children}
        </OpenContext.Provider>
    )
}


export function DashboardContext() {
    const context = useContext(OpenContext)
    return context 
}