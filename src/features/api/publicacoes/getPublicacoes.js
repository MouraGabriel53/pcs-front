export default async function getPublicacoes(codigoPubli) {
    
    const url = `http://localhost:8080/api/rest/v1/getPublicacoes?idpublicacao=&nItem=&codigo=${codigoPubli}&nome=&tipo=`;
  
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
        if (data.response == null) {
            const data = {
                "error": "publicação não cadastrada!"
            }
            return data
        } else {
            return data
        }
    } catch (error) {
        console.error(error.message);
        const data = {
            "error": "operação falhou!"
        }
        return data
    }
}