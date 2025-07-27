import { useState } from "react";
import CardPublicacao from "../../../components/cardPublicacao/CardPublicacao";
import putPublicacoes from "../../../features/api/publicacoes/putPublicacoes";
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"
import deletePublicacoes from "../../../features/api/publicacoes/deletePublicacoes";

export default function AlterarPublicacao() {
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
        const data = await putPublicacoes(numeroItem, codigo, nome, tipo)
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
        }
        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
        }
        sessionStorage.clear()
        setNumeroItem('')
        setCodigo('')
        setNome('')
        setTipo('')
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const data = await deletePublicacoes()
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
        }
        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
        }
        sessionStorage.clear()
        setNumeroItem('')
        setCodigo('')
        setNome('')
        setTipo('')
    }

    return(
        <div className="d-flex m-auto">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <CardPublicacao
                numeroItem={numeroItem}
                setNumeroItem={setNumeroItem}
                codigo={codigo}
                setCodigo={setCodigo}
                nome={nome}
                setNome={setNome}
                tipo={tipo}
                setTipo={setTipo}
                isRequiredCodigo={true}
                isRequiredNome={true}
                onSubmit={onSubmit}
                showDeleteBtn={true}
                handleDelete={handleDelete}
                btnName="Alterar"
            ></CardPublicacao>
        </div>
    )
}