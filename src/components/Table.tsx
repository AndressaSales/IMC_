interface TableImc{
    imc: number
}

export default function Table(props: TableImc){
    return(
        <div className="flex justify-center items-center flex-col">
            <main className="mx-2 mb-2 border-4 border-black">
                <div className="flex gap-10 border-4 border-black bg-black text-white">
                    <div className="font-bold py-5 pl-5">Classificação</div>
                    <div className="py-5 pl-10 font-bold">IMC</div>
                </div>
                <div className={"flex gap-7 py-5 pl-3 pr-3" + (props.imc < 18.5 ? "border-l-transparent destaqueAba" : "")}>
                    <div>Abaixo do Peso</div>
                    <div className=" pl-5">Abaixo de 18,5</div>
                </div>
                <div className={"flex gap-7  py-5 pl-3 pr-3 border-4 border-black border-b-transparent border-r-transparent border-l-transparent" + (props.imc >= 18.5 && props.imc <= 24.9 ? "border-l-transparent destaqueNormal" : "")}>
                    <div>Peso Normal</div>
                    <div className=" pl-7">Entre 18,5 e 24,9</div>
                </div>
                <div className={"flex gap-7 py-5 pl-3 pr-3 border-4 border-black border-b-transparent border-r-transparent border-l-transparent" + (props.imc >= 25 && props.imc <= 29.9 ? "border-l-transparent destaqueSobre" : "")}>
                    <div>Sobrepeso</div>
                    <div className=" pl-14">Entre 25 e 29,9</div>
                </div>
                <div className={"flex gap-7 py-5 pl-3 pr-3 border-4 border-black border-b-transparent border-r-transparent border-l-transparent" + (props.imc >= 30 && props.imc <= 34.9 ? "border-l-transparent destaqueObs" : "")}>
                    <div>Obesidade Grau I</div>
                    <div className=" pl-2">Entre 30 e 34,9</div>
                </div>
                <div className={"flex gap-7 py-5 pl-3 pr-3 border-4 border-black border-b-transparent border-r-transparent border-l-transparent" + (props.imc >= 35 && props.imc <= 39.9 ? "border-l-transparent destaqueObs" : "")}>
                    <div>Obesidade Grau II</div>
                    <div className="pl-1">Entre 35 e 39,9</div>
                </div>
                <div className={"flex gap-7 py-5 pl-3 pr-3 border-4 border-black border-b-transparent border-r-transparent border-l-transparent" + (props.imc > 40 ? "border-l-transparent destaqueObs" : "")}>
                    <div>Obesidade Grau III</div>
                    <div className="pl-3">Maior que 40</div>
                </div>
            </main>
        </div>
    )
}