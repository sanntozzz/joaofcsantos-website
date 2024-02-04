import axios from 'axios'
import fs from 'fs'
import path from 'path'

const languagesList = [
  {
    langId: 'en-us',
    locale: 'en',
  },
  {
    langId: 'pt',
    locale: 'pt',
  },
]

async function downloadTranslations(
  apiToken,
  projectId,
  langId,
  outputFolder,
  outputFileName,
) {
  try {
    const apiUrl = 'https://api.poeditor.com/v2/projects/export'

    const formData = new FormData()
    formData.append('api_token', apiToken)
    formData.append('id', projectId)
    formData.append('language', langId)
    formData.append('type', 'key_value_json')

    const response = await axios.post(apiUrl, formData)

    const downloadUrl = response.data.result.url

    const filePath = path.join(outputFolder, outputFileName)

    const fileStream = fs.createWriteStream(filePath)
    const downloadResponse = await axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'stream',
    })

    downloadResponse.data.pipe(fileStream)

    await new Promise((resolve, reject) => {
      fileStream.on('finish', resolve)
      fileStream.on('error', reject)
    })

    console.log('File downloaded and saved successfully.')
  } catch (error) {
    console.error('Error:', error.message)
  }
}

const apiToken = '12c317b86d631ec7a240a7a43747fa59'
const projectId = '678049'
const outputFolder = 'messages'

languagesList.forEach((language) => {
  downloadTranslations(
    apiToken,
    projectId,
    language.langId,
    outputFolder,
    `${language.locale}.json`,
  )
})
