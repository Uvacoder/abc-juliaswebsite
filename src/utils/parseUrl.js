const matchFolder = (urls, folderName) => {
  return urls.filter(url => url.node.secure_url.includes(folderName))
}

const parseUrlToThumb = url => {
  const arr = url.split("q_auto,f_auto")
  return arr[0] + "w_400," + "c_scale" + arr[1]
}
const parseUrlToFull = url => {
  const arr = url.split("q_auto,f_auto")
  return arr[0] + "w_1200," + "c_scale" + arr[1]
}

export { parseUrlToThumb, parseUrlToFull, matchFolder }
