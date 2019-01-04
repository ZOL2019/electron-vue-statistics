const xlsx = require('node-xlsx')
const fs = require('fs')
const result = {
  code: '200',
  msg: '操作成功！',
  data: []
}
// 读取 index 并返回json
const xlsxtoJson = function (path, name) {
  const data = xlsx.parse('./static/docs/' + path + name + '.xlsx')
  result.data = data[0].data
  return result
}
// 输出 index
const jsontoXlsx = function (path, name, data) {
  const buffer = xlsx.build(data)
  fs.writeFile('./static/docs/' + path + name + '.xlsx', buffer, function (err) {
    if (err) {
      result.code = '204'
      result.msg = '导出错误！'
    }
    return result
  })
}

export default {
  xlsxtoJson,
  jsontoXlsx
}
