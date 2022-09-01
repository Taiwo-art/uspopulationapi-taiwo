const getUsPopAPI = async() => {
    let fetchPopData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    let popData = await fetchPopData.json()
    let finalPopData = popData.data
    let finalResult = finalPopData.map(pop => `<li> ID Nation: ${pop.Nation}-----Nation: ${pop.Nation}-----ID Year: ${pop.Year}----Year: ${pop.Year}-----Population: ${pop.Population}----Slug Nation: ${pop.Nation}----</li> <br>`)
        
  return document.body.innerHTML = finalResult.join('');
}
getUsPopAPI()