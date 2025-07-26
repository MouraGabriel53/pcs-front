export default function InputAno({ setAno }){

    return(
        <div className="text-light text-center">
            <h4>Ano</h4>
                <select 
                    name='year'
                    className="form-select" 
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