import { useState } from "react"
import getControle from "../../features/getControle"

export default function Table(){
    const [publiID, setPubliID] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')


    const handlerSubmit = async (e) => {
        e.preventDefault()
        const data = getControle(publiID, quantidade, mes, ano)
        console.log(data)
    }

    return(
        <div className="">
            <form onSubmit={handlerSubmit} className="d-flex gap-1 m-1" style={{width:'20rem'}}>
                <h5 className="m-auto">Filtros</h5>
                <select 
                    name='mouth'
                    className="form-select" 
                    value={mes} 
                    onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês:</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <select 
                    name='year'
                    className="form-select" 
                    value={ano} onChange={(e) => setAno(e.target.value)}>
                    <option value="">Ano:</option>
                    <option value="2025">2025</option>
                </select>
                <button type="submit" className="btn btn-outline-success">Filtrar</button>
            </form>
            <table className="table table-hover">
                <thead>
                    <tr className="text-center">
                        <th scope="col">ID</th>
                        <th scope="col">PUBLICACAOID</th>
                        <th scope="col">QUANTIDADE</th>
                        <th scope="col">MÊS</th>
                        <th scope="col">ANO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        {/*ITERAR AQUI*/}
                        <th scope="row">12</th>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}