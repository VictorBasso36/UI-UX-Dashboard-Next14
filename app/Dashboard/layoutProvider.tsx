"use client"
import axios from 'axios';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
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
    const [dataCharts, setDataCharts] = useState()
    console.log(dataCharts)

    async function postRequest() {
        const url = 'https://tdbi.taxidigital.net/';
        const token = '8c4EF9vXi8TZe6581e0af85c25';
        const dtInicio = dayjs(start).format('DD/MM/YYYY');
        const dtFinal = dayjs(end).format('DD/MM/YYYY');
        const dsTipos = ['Chamados_Telefone', 'Chamados_Cliente', 'Chamados_Whatsapp', 'Reinicializacao_Servidor'];
    
        for (const dsTipo of dsTipos) {
            const data = {
                token: token,
                dtInicio: dtInicio,
                dtFinal: dtFinal,
                dsTipo: dsTipo
            };
    
            const config = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            };
    
            try {
                const response = await fetch(url, config);
                const responseData = await response.json();
                setDataCharts(responseData);
                console.log(`Status: ${response.status}`);
                console.log('Body: ', responseData);
            } catch (err) {
                console.error(err);
            }
        }
    }
    useEffect(() => {
        postRequest();
    }, [start, end]);

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
