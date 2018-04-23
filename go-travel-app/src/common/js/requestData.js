import axios from 'axios'

export function getRequestData(path) {
  return new Promise((resolve, reject) => {
    axios.get(path).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}