import { useState } from "react"
import CardControle from "../../../components/cardControle/CardControle"
import CardInfo from "../../../components/cardInfo/CardInfo"
import postControle from '../../../features/api/controle/postControle'
import SuccessModal from "../../../components/modal/successModal/SuccessModal"
import ErrorModal from "../../../components/modal/errorModal/ErrorModal"

export default function Lancar(){
    const [codigoPubli, setCodigoPubli] = useState('')
    const [nItem, setNumItem] = useState('')
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')

    const [publicacaoId, setPublicacaoId] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await postControle(publicacaoId, quantidade, mes, ano)
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
        setPublicacaoId('')
        setQuantidade('')
        setMes('')
        setAno('')

        setCodigoPubli('')
        setNumItem('')
        setCodigo('')
        setNome('')
        setTipo('')
    }

    return(
        <div className="d-flex m-auto gap-5 align-items-center">
            {showSuccessModal && <SuccessModal menssagem={successMessage} onClose={() => {setShowSuccessModal(false)}}></SuccessModal>}
            {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <CardInfo
                codigoPubli={codigoPubli}
                nItem={nItem}
                codigo={codigo}
                nome={nome}
                tipo={tipo}
                setCodigoPubli={setCodigoPubli}
                setNumItem={setNumItem}
                setCodigo={setCodigo}
                setNome={setNome}
                setTipo={setTipo}
                publicacaoId={publicacaoId}
                setPublicacaoId={setPublicacaoId}
            ></CardInfo>
            <div className="d-flex flex-column gap-2">
                <div className="form-control mb-2">Selecionado: {publicacaoId}</div>
                    <CardControle 
                        isRequiredQuantidade={true}
                        btnName='Lançar'
                        onSubmit={onSubmit}
                        setQuantidade={setQuantidade}
                        setMes={setMes}
                        setAno={setAno}
                        quantidade={quantidade}
                        mes={mes}
                        ano={ano}
                        ></CardControle>
            </div>

        </div>
    )
}