import { useEffect, useState } from "react"
import getPublicacoes from '../../../features/api/publicacoes/getPublicacoes'

export default function TablePublicacoes({ setSelectedPublicacaoID, isChanged }){ 
    const [data, setData] = useState([])
    const [selectedID, setSelectedID] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPublicacoes()
            setData(data.response);
        };
        fetchData();
    }, [isChanged]);
     
    return (
        <div style={{ width: '60rem', height: '30rem', overflowY: 'auto' }}>
            <table className="table table-striped table-hover m-0 text-center">
                <thead className="text-center"
                    style={{
                        position: 'sticky',
                        top: 0,
                        backgroundColor: '#fff',
                        zIndex: 2
                    }}>
                    <tr>
                        <th scope="col">PUBLICACAOID</th>
                        <th scope="col">NITEM</th>
                        <th scope="col">CODIGO</th>
                        <th scope="col">NOME</th>
                        <th scope="col">TIPO</th>
                    </tr>
                </thead>
                <tbody>
                    {data != null && data.map((item) => (
                        <tr 
                            key={item.PUBLICACAOID} 
                            id={item.PUBLICACAOID} 
                            className={selectedID == item.PUBLICACAOID ? "table-success" : ""} 
                            onClick={(e) => {setSelectedPublicacaoID(e.currentTarget.id); setSelectedID(e.currentTarget.id)}}>
                                
                                <td>{item.PUBLICACAOID}</td>
                                <td>{item.NITEM}</td>
                                <td>{item.CODIGO}</td>
                                <td>{item.NOME}</td>
                                <td>{item.TIPO}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}