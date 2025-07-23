import { useState } from 'react'
import '../cardManager/CardManager.css'
import LabelControllManager from '../labelControllManager/LabelControllManager'
import postControle from '../../features/postControle.js'

export default function CardManager(){
    const [dados, setDados] = useState({quantidade: '', mes: '', ano: ''})

    const handlerSubmit = async (event) => {
        event.preventDefault()
        const quantidade = dados.quantidade
        const mes = dados.mes
        const ano = dados.ano
        const publiID = sessionStorage.getItem('PUBLICACAOID')
        const response = await postControle(publiID, quantidade, mes, ano)
        console.log(response)
    }
    return(
        <div className='m-auto'>
            <form className='d-flex flex-column bg-dark p-4 rounded-4' onSubmit={handlerSubmit}>
                <LabelControllManager onChange={setDados}></LabelControllManager>
                <button className="btn btn-outline-success btn-lg" type="submit">Lançar</button>
            </form>
        </div>
    )
}