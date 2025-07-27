export default function InputNItem({ isRequired, numeroItem, setNumeroItem }){
    return(
        <div className="text-light text-center">
            <h4>Número do Item</h4>
            <input 
                name='nItem'
                type="text" 
                className="form-control" 
                placeholder="Número do Item"
                required={isRequired}
                aria-label="input-numero-item"
                value={numeroItem}
                onChange={(e) => {setNumeroItem(e.target.value)}}/>
        </div>

    )
}