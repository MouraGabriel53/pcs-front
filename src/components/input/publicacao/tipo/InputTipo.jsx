export default function InputTipo({ tipo, setTipo }){
    return(
       <select
            name='tipo' 
            className="form-select"
            aria-label="select-tipo"
            value={tipo}
            onChange={(e) => {setTipo(e.target.value)}}>
            <option value="">Tipo:</option>
            <option value="Bíblia">Bíblia</option>
            <option value="Brochuras e Livretos">Brochuras e Livretos</option>
            <option value="Formulários">Formulários</option>
            <option value="Kit de Ferramenta de Ensino">Kit de Ferramenta de Ensino</option>
            <option value="Livros">Livros</option>
            <option value="Revistas">Revistas</option>
        </select>
    )
}