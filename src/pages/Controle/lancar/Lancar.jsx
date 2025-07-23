import CardInfo from "../../../components/cardInfo/CardInfo"
import CardManager from "../../../components/cardManager/CardManager"

export default function Lancar(){
    return(
        <div className="d-flex m-auto gap-5">
            <CardInfo></CardInfo>
            <CardManager></CardManager>
        </div>
    )
}