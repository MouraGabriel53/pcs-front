export default async function postPublicacoes(numeroItem, codigo, nome, tipo) {
    
    const url = `http://localhost:8080/api/rest/v1/postPublicacoes/${numeroItem}/${codigo}/${nome}/${tipo}`;
  
    try {
        const response = await fetch(url, {
            method: 'POST',
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