import { useState } from "react"
import Filter from "../../../components/filter/Filter"
import Table from "../../../components/table/Table"
import CardInfo from '../../../components/cardInfo/CardInfo'
import CardControle from '../../../components/cardControle/CardControle'
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"
import putControle from '../../../features/putControle'

export default function Alterar(){
    const [isChanged, setIsChanged] = useState(false)
    const [selectControleID, setSelectControleID] = useState(0)
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
            const data = await putControle(selectControleID, publiID, quantidade, mes, ano)
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
            setIsChanged(!isChanged)
        }

    return(
        <div className="d-flex m-auto align-items-center gap-5">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <div className="d-flex flex-column gap-2">
                <Filter 
                    setIsChanged={setIsChanged} isChanged={isChanged}></Filter>
                <Table 
                    isChanged={isChanged} 
                    setSelectControleID={setSelectControleID}></Table>
            </div>
            <div>
                <div className="form-control mb-2">Selecionado: {selectControleID}</div>
                <CardControle
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                    btnName='Alterar'
                    onSubmit={onSubmit}
                    setQuantidade={setQuantidade}
                    setMes={setMes}
                    setAno={setAno}
                    quantidade={quantidade}
                    mes={mes}
                    ano={ano}></CardControle>
            </div>
        </div>
    )
}