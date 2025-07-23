import { useState } from "react";
import LabelInfo from '../labelInfo/LabelInfo'
import getPublicacoes from "../../features/getPublicacoes.js";
import '../cardInfo/CardInfo.css'

export default function CardInfo(){
    const [codigoPubli, setCodigoPubli] = useState('')
    const [publicacaoId, setPublicacaoId] = useState('')
    const [nItem, setNumItem] = useState('')
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')

    const handlerSubmit = async (event) => {
    event.preventDefault()
    const response = await getPublicacoes(codigoPubli)
    setPublicacaoId(response.PUBLICACAOID)
    setNumItem(response.NITEM)
    setCodigo(response.CODIGO)
    setNome(response.NOME)
    setTipo(response.TIPO)
    sessionStorage.setItem("PUBLICACAOID", response.PUBLICACAOID)
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
            <form className="d-flex mb-3" onSubmit={handlerSubmit} type="submit">
                <input 
                    name="search"
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Pesquisar" 
                    aria-label="Search" 
                    onChange={(event) => {
                        setCodigoPubli(event.target.value)                        
                }}></input>
                <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            </form>
            {
                Object.values(dataPubli).map((value, key) => {
                    return(
                        <LabelInfo key={key} name={value.name} value={value.value} aria-label={key}></LabelInfo>
                    )
                })
            }
        </div>
    )
}

