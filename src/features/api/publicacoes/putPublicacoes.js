export default async function putPublicacoes(numeroItem, codigo, nome, tipo) {
    const publiID = 135
    const url = `http://localhost:8080/api/rest/v1/putPublicacoes/${publiID}?nItem=${numeroItem}&codigo=${codigo}&nome=${nome}&tipo=${tipo}`;
  
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
            "error": "operação falhou!"
        }
        return data
    }
}