import "./Animal.css"

interface AnimalProps{
    icone: string;
    nome: string;
    peso: number;
    extincao?: boolean; // o ? quer dizer que é opcional
    cor: string;
}

export default function({icone, nome, peso, extincao, cor}:AnimalProps){
    return (
        <div className="animal" style={{background: cor}}>
            <div className="icone">{icone}</div>
            <div className="nome" >{nome}</div>
            <div className="peso" >{peso}kg</div>
            {extincao && <div className="extincao">Em Extinção!</div>}
       </div>
    )
}