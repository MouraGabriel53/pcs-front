import AsideBar from "../components/asideBar/AsideBar";
import CardInfo from "../components/cardInfo/CardInfo";
import CardManager from "../components/cardManager/CardManager";
import '../pages/General.css'

export default function General(){
    
    return(
        <div className="d-flex flex-1" style={{backgroundColor:"#F5F7FA"}}>
            <AsideBar></AsideBar>
                <div className="d-flex p-3 m-2 border-dashed" style={{width: '100%'}}>
                    <CardInfo></CardInfo>
                    <CardManager></CardManager>
                </div>
        </div>
    )
}