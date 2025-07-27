export default async function getControle() {
    const publiID = ''
    const quantidade = ''
    const mes = sessionStorage.getItem('MES')
    const ano = sessionStorage.getItem('ANO')

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