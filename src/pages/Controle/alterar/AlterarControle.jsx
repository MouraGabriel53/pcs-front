import { useState } from "react"
import Filter from "../../../components/filter/Filter"
import TableControle from "../../../components/table/tableControle/TableControle"
import CardControle from '../../../components/cardControle/CardControle'
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"
import putControle from '../../../features/api/controle/putControle'
import deleteControle from "../../../features/api/controle/deleteControle"

export default function Alterar(){
    const [isChanged, setIsChanged] = useState(false)
    const [selectedControleID, setSelectedControleID] = useState("")
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await putControle(selectedControleID, quantidade, mes, ano)
        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
            return
        }
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
            return
        }
    
        setSelectedControleID("")
        setQuantidade('')
        setMes('')
        setAno('')
        setIsChanged(!isChanged)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const data = await deleteControle(selectedControleID)
        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
            return
        }
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
            return
        }

        setSelectedControleID("")
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
                    showMesAndAno={true}
                    showTipo={false}
                    setIsChanged={setIsChanged} 
                    isChanged={isChanged}></Filter>
                <TableControle 
                    isChanged={isChanged} 
                    setSelectedControleID={setSelectedControleID}></TableControle>
            </div>
            <div>
                <div className="form-control mb-2">Selecionado: {selectedControleID}</div>
                <CardControle
                    isRequiredQuantidade={false}
                    showDeleteBtn={true}
                    handleDelete={handleDelete}
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