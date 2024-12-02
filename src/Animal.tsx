import "./Animal.css"

interface AnimalProps{
    icone: string;
    nome: string;
    peso: number;
    extincao: boolean;
    cor: string;
}

export default function({icone, nome, peso, extincao, cor}:AnimalProps){
    return (
        <div className="animal" style={{background: cor}}>
            <div>{icone}</div>
            <div>{`${nome}`}</div>
            <div>{`Peso: ${peso}kg`}</div>
            <div>{`Extinto: ${extincao === true ? "sim" : "não"} `}</div>
       </div>
    )
}