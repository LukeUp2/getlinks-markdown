import fetch from 'node-fetch'

const handleErros = (err) => {
  throw new Error(err.message);
}

const checkLinkStatus = async (arrayURLs) => {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async url => {
        const response = await fetch(url)
        return response.status
      })
    )
    return arrayStatus
  } catch (err){
    handleErros(err)
  }
  
}

const generateUrlArray = (arrayLinks) => {
  let links = []
  arrayLinks.map(link => {
    links.push(Object.values(link).join())
  })
  return links
}

const validateURL = async (arrayLinks) => {
  const links = generateUrlArray(arrayLinks)
  const statusLinks = await checkLinkStatus(links)
  
  const results = arrayLinks.map((link, index) => (
    { ...link, status: statusLinks[index] }
  ))
  return results
}

export default validateURL