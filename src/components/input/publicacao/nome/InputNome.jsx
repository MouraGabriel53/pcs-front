export default function InputNome({ isRequired, nome, setNome }){
    return(
        <input 
            name='nome'
            type="text" 
            className="form-control" 
            placeholder="Nome"
            required={isRequired}
            aria-label="input-nome"
            value={nome}
            onChange={(e) => {setNome(e.target.value)}}/>
    )
}