export default async function getControle() {
    const publiID = sessionStorage.getItem('PUBLICACAOID') || ''
    const quantidade = sessionStorage.getItem('QUANTIDADE') || ''
    const mes = sessionStorage.getItem('MES') || ''
    const ano = sessionStorage.getItem('ANO') || ''
    // const tipo = sessionStorage.getItem('TIPO')
    console.log(publiID, quantidade, mes, ano)

    const url = `http://localhost:8080/api/rest/v1/getControle?idpublicacao=${publiID}&quantidade=${quantidade}&mes=${mes}&ano=${ano}`;
  
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data.response
    } catch (error) {
        console.error(error.message);
        return 
    }
}