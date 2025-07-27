export default function InputCodigo({ isRequired, codigo, setCodigo }){
    return(
        <input 
            name='codigo'
            type="text" 
            className="form-control" 
            placeholder="Código"
            required={isRequired}
            aria-label="input-codigo"
            value={codigo}
            onChange={(e) => {setCodigo(e.target.value)}}/>
    )
}