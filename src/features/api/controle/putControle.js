export default async function postControle(controleID, publiID, quantidade, mes, ano) {
    
    const url = `http://localhost:8080/api/rest/v1/putControle/${controleID}?publicacao=${publiID}&quantidade=${quantidade}&mes=${mes}&ano=${ano}`;
  
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error.message);
        const data = {
            "error": "a operação falhou!"
        }
        return data
    }
}