import { useState } from "react"
import getControle from "../../features/getControle"

export default function Table(){
    const [publiID, setPubliID] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [tipo, setTipo] = useState('')


    const handlerSubmit = async (e) => {
        e.preventDefault()
        const data = getControle(publiID, quantidade, mes, ano)
        console.log(data)
    }

    return(
        <div className="">
            <form onSubmit={handlerSubmit} className="d-flex gap-1 my-2">
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
                    {[-1, 0, 1].map((offset, i) => {
                        const year = new Date().getFullYear() + offset;
                        return (
                            <option 
                            key={i} 
                            value={year}
                            >{year}</option>
                        );
                    })}
                </select>
                 <select 
                    name='type'
                    className="form-select" 
                    value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Tipo:</option>
                    <option value="2025">Bíblia</option>
                    <option value="2025">Brochuras e livretos</option>
                    <option value="2025">Formulários</option>
                    <option value="2025">Kit de Ferramenta de Ensino</option>
                    <option value="2025">Livros</option>
                    <option value="2025">Revistas</option>
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