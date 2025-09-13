import { useState } from "react";
import CardPublicacao from "../../../components/cardPublicacao/CardPublicacao";
import putPublicacoes from "../../../features/api/publicacoes/putPublicacoes";
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"
import deletePublicacoes from "../../../features/api/publicacoes/deletePublicacoes";
import TablePublicacoes from "../../../components/table/tablePublicacoes/TablePublicacoes";
import Filter from "../../../components/filter/Filter";

export default function AlterarPublicacao() {
    const [isChanged, setIsChanged] = useState(false)
    const [selectedPublicacaoID, setSelectedPublicacaoID] = useState("")
    const [numeroItem, setNumeroItem] = useState('')
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await putPublicacoes(selectedPublicacaoID, numeroItem, codigo, nome, tipo)
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

        setSelectedPublicacaoID("")
        setNumeroItem('')
        setCodigo('')
        setNome('')
        setTipo('')
        setIsChanged(!isChanged)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const data = await deletePublicacoes(selectedPublicacaoID)
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

        setSelectedPublicacaoID("")
        setNumeroItem('')
        setCodigo('')
        setNome('')
        setTipo('')
        setIsChanged(!isChanged)
    }

    return(
        <div className="d-flex m-auto align-items-center gap-5">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <div className="d-flex flex-column gap-2">
                <Filter
                    showMesAndAno={false}
                    showTipo={true}
                    setIsChanged={setIsChanged} 
                    isChanged={isChanged}
                ></Filter>
                <TablePublicacoes
                    isChanged={isChanged}
                    setSelectedPublicacaoID={setSelectedPublicacaoID} 
                ></TablePublicacoes>
            </div>
            <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
                <div className="form-control mb-2">Selecionado: {selectedPublicacaoID}</div>
                <CardPublicacao
                    numeroItem={numeroItem}
                    setNumeroItem={setNumeroItem}
                    codigo={codigo}
                    setCodigo={setCodigo}
                    nome={nome}
                    setNome={setNome}
                    tipo={tipo}
                    setTipo={setTipo}
                    isRequiredCodigo={false}
                    isRequiredNome={false}
                    onSubmit={onSubmit}
                    showDeleteBtn={true}
                    handleDelete={handleDelete}
                    btnName="Alterar"
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                ></CardPublicacao>
            </div>

        </div>
    )
}