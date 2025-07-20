import '../cardManager/CardManager.css'
import LabelManager from '../labelManager/LabelManager'

export default function CardManager(){
    const handlerSubmit = () => {
        alert('Chamou')
    }
    return(
        <div>
            <form onSubmit={handlerSubmit}>
                <LabelManager name="Teste" type="mouth" placeholder="teste"></LabelManager>
                <button type='submit'>Teste</button>
            </form>
        </div>
    )
}