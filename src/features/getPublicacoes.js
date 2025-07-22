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
        const json = await response.json();
        return json.response[0]
    } catch (error) {
        console.error(error.message);
    }
}