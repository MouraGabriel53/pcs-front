import { useState } from "react"

export default function Filter({ setIsChanged, isChanged, showTipo, showMesAndAno }) {
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [tipo, setTipo] = useState('')

    const handlerSubmit = async (e) => {
        e.preventDefault()
        sessionStorage.clear()
        sessionStorage.setItem('MES', mes)
        sessionStorage.setItem('ANO', ano)
        sessionStorage.setItem('TIPO', tipo)
        setIsChanged(!isChanged)
    }

    return(
        <form onSubmit={handlerSubmit} className="d-flex gap-1">
            {showMesAndAno && 
                <><select
                    name='mouth'
                    className="form-select"
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês:</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select><select
                    name='year'
                    className="form-select"
                    value={ano} onChange={(e) => setAno(e.target.value)}>
                        <option value="">Ano:</option>
                        {[-1, 0, 1].map((offset, i) => {
                            const year = new Date().getFullYear() + offset
                            return (
                                <option
                                    key={i}
                                    value={year}
                                >{year}</option>
                            )
                        })}
                    </select></>
            }
            {showTipo && 
                <select 
                    name='type'
                    className="form-select" 
                    value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Tipo:</option>
                    <option value="Bíblia">Bíblia</option>
                    <option value="Brochuras e livretos">Brochuras e livretos</option>
                    <option value="Formulários">Formulários</option>
                    <option value="Kit de Ferramentas de Ensino">Kit de Ferramentas de Ensino</option>
                    <option value="Livros">Livros</option>
                    <option value="Revistas">Revistas</option>
                </select>
            }
            <button type="submit" className="btn btn-outline-success">Filtrar</button> 
        </form>
    )
}