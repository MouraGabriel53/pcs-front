import { useState } from "react"
import CardControle from "../../../components/cardControle/CardControle"
import CardInfo from "../../../components/cardInfo/CardInfo"
import postControle from '../../../features/postControle'
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"

export default function Lancar(){
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const publiID = sessionStorage.getItem('PUBLICACAOID')
        const data = await postControle(publiID, quantidade, mes, ano)
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
        }

        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
        }

        sessionStorage.clear()
        setQuantidade('')
        setMes('')
        setAno('')
    }

    return(
        <div className="d-flex m-auto gap-5 text-center align-items-center">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <CardInfo></CardInfo>
            <CardControle 
                btnName='Lançar'
                onSubmit={onSubmit}
                setQuantidade={setQuantidade}
                setMes={setMes}
                setAno={setAno}
                ></CardControle>
        </div>
    )
}