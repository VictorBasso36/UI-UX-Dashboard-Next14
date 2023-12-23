"use client"
import axios from 'axios';
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';

interface OpenProviderProps {
  children: ReactNode;
}

interface Dados {
    dsDescricao: string | null;
    dsTipo: string;
    dtOperacao: string;
    nrQtde: number;
}

interface DadosTicket{
    dsAtendimento: string;
    dtOperacao: string;
    nrAbertos: number;
    nrFechados: number;
    nrPendentes: number;
}

interface DadosResumoTicket{
    dsAtendimento: string,
    dsAtualizado: number,
    dsNaoAtribuido: number,
    dsPendente: number,
    dsResolvido: number,
    dsSemResolucao: number,
    dtOperacao: string
}

interface DadosChamados {
    Chamados_Telefone: Dados[];
    Chamados_Cliente: Dados[];
    Chamados_Whatsapp: Dados[];
    Reinicializacao_Servidor: Dados[];
    ticket: DadosTicket[];
    ticketresumo: DadosResumoTicket[];
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

    loading: boolean,
    dataCharts: DadosChamados | null
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

    loading: false,
    dataCharts: null
})



export function DashboardProvider({ children }: OpenProviderProps) {
    //NavigationProvider
    const [open, setOpen] = useState<boolean>(true)

    //SearchBarProvider
    const[openSearch, setOpenSearch] = useState<boolean>(false)
    
    //HomeEndDate and HomeStartDate
    const [start, setStart] = useState<Date | null>(dayjs().subtract(45, 'days').toDate());
    const [end, setEnd] = useState<Date | null>(dayjs().toDate());

    //goData Charts 
    const [dataCharts, setDataCharts] = useState<DadosChamados | null>(null)
    const [loading, setLoading] = useState<boolean>(false) //statusLoading
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    async function postRequest() {
        await sleep(300);
        setLoading(true);
        
        const url = '/Dashboard/Home/pages/api/homeData';
        const token = '8c4EF9vXi8TZe6581e0af85c25';

        const dsTipos = ['Chamados_Telefone', 'Chamados_Cliente', 'Chamados_Whatsapp', 'Reinicializacao_Servidor', 'ticketresumo', 'ticket'];
    
        for (const dsTipo of dsTipos) {
            const data = {
                token: token,
                dtInicio:  dayjs(start).format('DD/MM/YYYY'),
                dtFinal: dayjs(end).format('DD/MM/YYYY'),
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
                setDataCharts((prevDataCharts: any) => ({...prevDataCharts, [dsTipo]: responseData}));

            } catch (err) {
                console.error(err);
            }

            setLoading(false);
        }
    }
    useEffect(() => {
        postRequest();
    }, [start, end]);

    return (
        <OpenContext.Provider 
        value={{ open, setOpen, setOpenSearch, openSearch, end, setEnd, setStart, start, loading, dataCharts }}
        >
        {children}
        </OpenContext.Provider>
    )
}

export function DashboardContext() {
    const context = useContext(OpenContext)
    return context 
}
