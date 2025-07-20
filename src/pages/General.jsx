import { useEffect, useState } from "react";
import AsideBar from "../components/asideBar/AsideBar";
import CardInfo from "../components/cardInfo/CardInfo";
import '../pages/General.css'
import getPublicacoes from "../components/features/getPublicacoes";

export default function General(){
    const [codigoPubli, setCodigoPubli] = useState()
    const [publicacaoId, setPublicacaoId] = useState()
    const [nItem, setNumItem] = useState()
    const [codigo, setCodigo] = useState()
    const [nome, setNome] = useState()
    const [tipo, setTipo] = useState()

    const handlerSubmit = async (event) => {
    event.preventDefault()
    const response = await getPublicacoes(codigoPubli)
    setPublicacaoId(response.PUBLICACAOID)
    setNumItem(response.NITEM)
    setCodigo(response.CODIGO)
    setNome(response.NOME)
    setTipo(response.TIPO)
}

    const dataPubli = {
    0: {name: 'ID Publicação', value: publicacaoId},
    1: {name: 'Número do Item', value: nItem},
    3: {name: 'Código', value: codigo},
    4: {name: 'Nome', value: nome},
    5: {name: 'Tipo', value: tipo},
}

    return(
        <div className="d-flex flex-1">
            <AsideBar></AsideBar>
            <div className="p-3 m-2 border-dashed" style={{width: '100%'}}>
                <form onSubmit={handlerSubmit} type="submit">
                    <input type="text" placeholder="Código" onChange={(event) => {
                        setCodigoPubli(event.target.value)                        
                    }}></input>
                    <button type="submit">Pesquisar</button>
                </form>
                {
                    Object.values(dataPubli).map((value, key) => {
                        return(
                            <CardInfo key={key} name={value.name} value={value.value} aria-label={key}></CardInfo>
                        )
                    })
                }
            </div>
        </div>
    )
}