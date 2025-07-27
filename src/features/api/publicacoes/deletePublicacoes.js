export default async function deletePublicacoes(selectedPublicacaoID) {

    const url = `http://localhost:8080/api/rest/v1/deletePublicacoes/${selectedPublicacaoID}`;
  
    try {
        const response = await fetch(url, {
            method: 'DELETE',
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