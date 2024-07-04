import Comp from "@/components/Comp"
import Table from "@/components/Table"
import { useState } from "react"
import Link from "next/link"

export default function Calcimc(){
    const [peso, setPeso] = useState<number>(0)
    const [alt, setAlt] = useState<number>(0)
    const [imc, setImc] = useState<number>(0)

    function cal(){
        let res = peso / (alt * alt)
        setImc(res)
    }

    return(
        <div>
            <p className="py-20 bg-gradient-to-r from-green-300 to-indigo-400 font-mono lg:text-5xl text-3xl font-bold text-center text-white w-full">Cálculo do IMC</p>

            <div>
                <div className="flex flex-col justify-center items-center gap-3 py-8 lg:flex-row lg:gap-5">
                    <Comp label='Peso' state={peso} funcao={setPeso} />
                    <Comp label='Altura' state={alt} funcao={setAlt} />
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="flex gap-6">
                        <button className="bg-black text-white p-4 rounded-md font-bolder w-32 hover:text-black hover:bg-white hover:font-bold hover:border-b-black hover:border-4 hover:border-e-transparent hover:border-l-transparent hover:border-t-transparent"  onClick={cal}>Calcular</button>

                    </div>
                    <p className="font-bold pt-6">Resultado: <span className="font-normal">{imc.toFixed(2)}</span></p>
                </div>
            </div>
            <Table imc={imc} />
        </div>
    )
}