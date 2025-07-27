export default async function getPublicacoes() {
    
    const url = `http://localhost:8080/api/rest/v1/getPublicacoes?idpublicacao=&nItem=&codigo=&nome=&tipo=`;
  
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