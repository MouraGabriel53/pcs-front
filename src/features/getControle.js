export default async function getControle(publiID, quantidade, mes, ano) {
    
    const url = `http://localhost:8080/api/rest/v1/getControle?idpublicacao=${idpublicacao}&quantidade=${quantidade}&mes=${mes}&ano=${ano}`;
  
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
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
}