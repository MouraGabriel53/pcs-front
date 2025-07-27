export default function InputNItem({ isRequired, numeroItem, setNumeroItem }){
    return(
        <input 
            name='nItem'
            type="text" 
            className="form-control" 
            placeholder="Número do Item"
            required={isRequired}
            aria-label="input-numero-item"
            value={numeroItem}
            onChange={(e) => {setNumeroItem(e.target.value)}}/>
    )
}