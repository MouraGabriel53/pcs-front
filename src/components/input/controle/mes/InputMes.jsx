export default function InputMes({ setMes, mes }){

    return(
        <div className="text-light text-center">
            <h4>Mês</h4>
                <select 
                    value={mes}
                    name='mes'
                    className="form-select" 
                    aria-label="select-mes" 
                    onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês:</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
        </div>
    )
}