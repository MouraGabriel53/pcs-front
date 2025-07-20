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
        <div className='d-flex justify-content-center align-content-center bg-black' style={{ width: '30rem' }}>
            <div className='text-white fs-5'>
                <h1>Quantidade</h1>
                <input
                    type='text'
                    placeholder='Quantidade'
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                />

                <h1>Mês</h1>
                <select className="form-select" value={mes} onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês:</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>

                <h1>Ano</h1>
                <select className="form-select" value={ano} onChange={(e) => setAno(e.target.value)}>
                    <option value="">Ano:</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>
    )
}
