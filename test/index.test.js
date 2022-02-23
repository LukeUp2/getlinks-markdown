import takeFile from '../index.js'

const arrayResults = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('takeFile:: ', () => {
  it('deve ser uma funcao', () => {
    expect(typeof takeFile).toBe(('function'))
  })

  it('deve retornar array com resultados', async () => {
    
    const result = await takeFile('/Users/joaolucasdelimafreitas/Desktop/Projeto Progamador/BoraAprenderSaMerda/nodeAlura/2299-lib-nodejs-markdown/test/arquivos/texto1.md')

    expect(result).toEqual(arrayResults)
  })

  it('deve retornar menssagem "nao ha links"', async () => {
    const result = await takeFile('/Users/joaolucasdelimafreitas/Desktop/Projeto Progamador/BoraAprenderSaMerda/nodeAlura/2299-lib-nodejs-markdown/test/arquivos/texto01_semlinks.md')

    expect(result).toBe('não há links')
  })
})
