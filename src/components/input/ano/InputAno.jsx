export default function InputAno({ setAno, ano }){

    return(
        <div className="text-light text-center">
            <h4>Ano</h4>
                <select 
                    value={ano}
                    name='ano'
                    className="form-select" 
                    aria-label="select ano" 
                    onChange={(e) => setAno(e.target.value)}>
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
    )
}