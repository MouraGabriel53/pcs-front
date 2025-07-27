import { useEffect, useState } from "react"
import getPublicacoes from '../../../features/api/publicacoes/getPublicacoes'

export default function TablePublicacoes({ setSelectedPublicacaoID, isChanged }){ 
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPublicacoes()
            setData(data);
        };
        fetchData();
    }, [isChanged]);
     
    return (
        <div style={{ width: '60rem', height: '30rem', overflowY: 'auto' }}>H
            <table className="table table-striped table-hover m-0">
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
                        <tr key={item.PUBLICACAOID} id={item.PUBLICACAOID} className="text-center" onClick={(e) => {setSelectedPublicacaoID(e.currentTarget.id)}}>
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