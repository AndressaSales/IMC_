interface CompProps{
    label: string,
    state: any,
    funcao: any
}

export default function Comp(props: CompProps){
    return(
        <main>
            <label className="flex text-xl text-gray-900 border-4 pl-1 border-green-300 border-t-transparent border-r-transparent border-b-transparent pb-2 rounded-none">{props.label}</label>
            <input className="outline-0 border-4 border-black border-t-transparent border-r-transparent border-l-transparent text-center" type="text" value={props.state} onChange={(e) => props.funcao(e.target.value)}/>
        </main>
    )
}