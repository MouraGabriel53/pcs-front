import { useEffect, useState } from "react"
import getControle from "../../features/api/controle/getControle"

export default function Table({ setSelectedControleID, isChanged }){ 
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getControle();
            setData(data);
        };
        fetchData();
    }, [isChanged]);
     
    return (
        <div style={{ width: '60rem', height: '30rem', overflowY: 'auto' }}>
            <table className="table table-striped table-hover m-0">
                <thead className="text-center"
                    style={{
                        position: 'sticky',
                        top: 0,
                        backgroundColor: '#fff',
                        zIndex: 2
                    }}>
                    <tr>
                        <th scope="col">CONTROLEID</th>
                        <th scope="col">PUBLICACAOID</th>
                        <th scope="col">QUANTIDADE</th>
                        <th scope="col">MÊS</th>
                        <th scope="col">ANO</th>
                    </tr>
                </thead>
                <tbody>
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} id={item.CONTROLEID} className="text-center" onClick={(e) => {setSelectedControleID(e.currentTarget.id)}}>
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}