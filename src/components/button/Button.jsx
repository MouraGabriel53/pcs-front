export default function Button({ showDeleteBtn, handleDelete, btnName }) {
    return(
        <div className="d-flex gap-2 justify-content-center">
            {showDeleteBtn &&
                <button 
                className="btn btn-outline-danger" 
                type="button"
                onClick={handleDelete}>Deletar</button>
            }
            <button 
                className="btn btn-success" 
                type="submit">{btnName}</button>                
        </div>
    )
}