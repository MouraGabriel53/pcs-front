import { useEffect, useState } from "react"
import getControle from "../../features/getControle"

export default function Table(){ 
    const [data, setData] = useState([])

    const handleGet = async () => {
        console.log("chamou")
        const data = await getControle()
        console.log(data)
        setData(data)
    }
    return(
        <div className="d-flex flex-column w-100 h-100 overflow-hidden">
            <div className="text-center overflow-auto" style={{ height: '5rem'}}>
                <table className="table table-striped table-hover m-0">
                <thead>
                    <tr className="text-center">
                        <th scope="col">CONTROLEID</th>
                        <th scope="col">PUBLICACAOID</th>
                        <th scope="col">QUANTIDADE</th>
                        <th scope="col">MÊS</th>
                        <th scope="col">ANO</th>
                    </tr>
                </thead>
                <tbody>
                     {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
                            <td>{item.CONTROLEID}</td>
                            <td>{item.PUBLICACAOID}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>{item.MES}</td>
                            <td>{item.ANO}</td>
                        </tr>
                    ))}
                    {data != null && data.map((item) => (
                        <tr key={item.CONTROLEID} className="text-center">
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
            <button type='button' onClick={handleGet}></button>
        </div>
    )
}