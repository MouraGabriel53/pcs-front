
export default function InputQuantidade({ setQuantidade, quantidade, isRequired }){
    return(
        <div className="text-light text-center">
            <h4>Quantidade</h4>
                <input 
                    name='quantidade'
                    type="text" 
                    className="form-control" 
                    aria-label="input quantidade" 
                    placeholder='Quantidade'
                    value={quantidade}
                    required={isRequired}
                    onChange={(e) => {setQuantidade(e.target.value)}}></input>
        </div>
    )
}