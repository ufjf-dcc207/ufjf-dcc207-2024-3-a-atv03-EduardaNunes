import './Exibicao.css'
import { ReactNode } from 'react';

interface ExibicaoProps{
    abertura: Date;
    fechamento: Date;
    cercado:string;
    children: ReactNode; // tipo genérico, aceita muitos tipos diferentes
}

export default function Exibicao({abertura: inicio, fechamento: fim, cercado: local, children:animais}: ExibicaoProps){
    return(
        <div className="Exibicao">
            <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
            <div className="fim">Fechamento: {fim.toLocaleString()}</div>
            <div className="local">Cercado: {local}</div>
            <div className='animais'>{animais}</div>
        </div>
    )
}