import chalk from 'chalk'
import fs from 'fs'

const extractLinks = async (text) => {
  //const regex = /\[([ˆ\]]*)\]\((https?:\/\/[ˆ$#\s].[ˆ\s]*)\)/gm;
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/g
  const resultArray = []
  let temp
  
  while((temp = regex.exec(text)) !== null) {
    resultArray.push({
      [temp[1]]: temp[2]
    })
  }
  
  return resultArray.length === 0 ? "não há links" : resultArray
}

const catchError = (err) => {
  throw new Error(chalk.red(err.code, 'There is no files on the giving path :('))
}

const takeFile = async (filePath) => {
  const encoding = 'utf-8'
  try{
    const text = await fs.promises.readFile(filePath, encoding)
    return extractLinks(text)
  } catch(err){
    catchError(err)
  }
}

export default takeFile