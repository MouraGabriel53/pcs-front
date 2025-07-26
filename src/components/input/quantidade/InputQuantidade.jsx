
export default function InputQuantidade({ setQuantidade }){
    return(
        <div className="text-light text-center">
            <h4>Quantidade</h4>
                <input 
                    name='quantidade'
                    type="text" 
                    className="form-control" 
                    aria-label="input quantidade" 
                    placeholder='Quantidade'
                    required
                    onChange={(e) => {setQuantidade(e.target.value)}}></input>
        </div>
    )
}