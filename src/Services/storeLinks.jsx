//Buscar links salvos

export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves =JSON.parse(myLinks) || [];
    return linksSaves;
}


//Salvar um link no localstorage

export async function saveLink(key, newLink){
    let linksStored =await getLinkSave(key, newLink);

    //se ja tiver um link salvo com algum ID eu nao vou deixar duplicar
    const hasLink =linksStored.some(link=> link.id ===  newLink.id); // true or false

    if(hasLink){
        console.log("link ja salvo  ")
        return; //parar a execução aqui, caso entre neste if.
    }

    //adicionar esse novo link na lista
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("link salvo")
}



//Deletar um link salvos

export function deleteLink(links, id){

    let myLinks = links.filter( item => {
         return (item.id !== id)
    }) 

    localStorage.setItem('@encurtaLink' , JSON.stringify(myLinks));
    console.log('link deleatado')

    return myLinks;

}