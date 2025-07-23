import { useState, useEffect } from 'react'
import './LabelControllManager.css'

export default function LabelControllManager({ onChange }) {
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')

    useEffect(() => {
        onChange({ quantidade, mes, ano })
    }, [quantidade, mes, ano, onChange])

    return (
        <div className='d-flex text-black'>
            <div className='text-light'>
                <h4>Quantidade</h4>
                <input 
                    name='quantity'
                    type="text" 
                    className="form-control mb-3" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" 
                    placeholder='Quantidade'></input>
                <h4>Mês</h4>
                <select 
                    name='mouth'
                    className="form-select mb-3" 
                    value={mes} 
                    onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês:</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <h4>Ano</h4>
                <select 
                    name='year'
                    className="form-select mb-3" 
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
            </div>
        </div>
    )
}
