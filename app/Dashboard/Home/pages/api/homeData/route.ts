import { NextRequest, NextResponse } from 'next/server';

const url = 'https://tdbi.taxidigital.net/';
const urlticketresumo = 'https://tdbi.taxidigital.net/ticketresumo'
const urlticket = 'https://tdbi.taxidigital.net/ticket'
const token = '8c4EF9vXi8TZe6581e0af85c25';

export async function POST(req: NextRequest, res: NextResponse) {
    const dataItems = await req.json();
    const items = dataItems;
    const data = {
        token: token,
        dtInicio: items?.dtInicio,
        dtFinal: items?.dtFinal,
        dsTipo: items?.dsTipo,
    };

    const config = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    
    // REQUEST
    try{
        const responseData = await fetch((() => {
            switch (data.dsTipo) {
                case 'ticketresumo':
                    return urlticketresumo;
                case 'ticket':
                    return urlticket;
                default:
                    return url;
            }
        })(), config);
        const jsonResponse = await responseData.json();
        return NextResponse.json(jsonResponse);
    } catch (error) {
        return NextResponse.json({ message: "Failed api access" }, { status: 500 })
    }
}
