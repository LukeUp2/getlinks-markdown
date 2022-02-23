#!/usr/bin/env node

import chalk from 'chalk'
import takeFile from './index.js'
import validateURL from './http-validacao.js'

const path = process.argv

const processText = async (path) => {
  const result = await takeFile(path[2])
  if(path[3] === 'validate'){
    console.log(chalk.yellow('Links validados'), await validateURL(result))
  } else {
    console.log(chalk.yellow('Link List :)'), result);
  }
}

processText(path)