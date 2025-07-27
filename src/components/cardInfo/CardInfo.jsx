import { useState } from "react";
import LabelInfo from '../labelInfo/LabelInfo'
import getPublicacoes from "../../features/api/publicacoes/getPublicacoes";
import '../cardInfo/CardInfo.css'
import ErrorModal from "../modal/errorModal/ErrorModal"

export default function CardInfo(){
    const [codigoPubli, setCodigoPubli] = useState('')
    const [publicacaoId, setPublicacaoId] = useState('')
    const [nItem, setNumItem] = useState('')
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handlerSubmit = async (e) => {
    e.preventDefault()
    const data = await getPublicacoes(codigoPubli)
    console.log(data.error)
    if (data.response != null) {
        setPublicacaoId(data.response[0].PUBLICACAOID)
        setNumItem(data.response[0].NITEM)
        setCodigo(data.response[0].CODIGO)
        setNome(data.response[0].NOME)
        setTipo(data.response[0].TIPO)
        sessionStorage.setItem("PUBLICACAOID", data.response[0].PUBLICACAOID)
    }
    if (data.error != null) {
        setErrorMessage(data.error)
        setShowErrorModal(true)
    }
}

    const dataPubli = {
    0: {name: 'ID Publicação', value: publicacaoId},
    1: {name: 'Número do Item', value: nItem},
    3: {name: 'Código', value: codigo},
    4: {name: 'Nome', value: nome},
    5: {name: 'Tipo', value: tipo},
}
    return(
        <div> 
             {showErrorModal && <ErrorModal menssagem={errorMessage} onClose={() => {setShowErrorModal(false)}}></ErrorModal>}
            <form className="d-flex mb-3" onSubmit={handlerSubmit} type="submit">
                <input 
                    name="search"
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Pesquisar" 
                    aria-label="Search" 
                    onChange={(e) => {
                        setCodigoPubli(e.target.value)                        
                }}></input>
                <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            </form>
            <div className="bg-dark rounded-3 p-3">
                {
                    Object.values(dataPubli).map((value, key) => {
                        return(
                            <LabelInfo key={key} name={value.name} value={value.value} aria-label={key}></LabelInfo>
                        )
                    })
                }
            </div>
        </div>
    )
}

