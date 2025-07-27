export default async function getPublicacoes(codigoPubli) {
   const nItem = ''
   const idpublicacao = ''
   const nome = ''
   const tipo = ''

    const url = `http://localhost:8080/api/rest/v1/getPublicacoes?idpublicacao=${idpublicacao}&nItem=${nItem}&codigo=${codigoPubli || ''}&nome=${nome}&tipo=${tipo}`;
  
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
        return data
    } catch (error) {
        console.error(error.message);
        return 
    }
}