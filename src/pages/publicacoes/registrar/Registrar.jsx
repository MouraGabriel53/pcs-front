import { useState } from "react";
import CardPublicacao from "../../../components/cardPublicacao/CardPublicacao";
import postPublicacoes from "../../../features/api/publicacoes/postPublicacoes";
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"

export default function Registrar() {
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const numeroItem = 0
        const data = await postPublicacoes(numeroItem, codigo, nome, tipo)
        if (data.error != null) {
            setErrorMessage(data.error)
            setShowErrorModal(true)
        }
        if (data.response != null) {
            setSuccessMessage(data.response)
            setShowSuccessModal(true)
        }

        setCodigo('')
        setNome('')
        setTipo('')
    }

    return(
        <div className="d-flex m-auto">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <CardPublicacao
                codigo={codigo}
                setCodigo={setCodigo}
                nome={nome}
                setNome={setNome}
                tipo={tipo}
                setTipo={setTipo}
                isRequiredTipo={true}
                isRequiredNItem={true}
                isRequiredCodigo={true}
                isRequiredNome={true}
                onSubmit={onSubmit}
                showDeleteBtn={false}
                btnName="Registrar"
            ></CardPublicacao>
        </div>
    )
}