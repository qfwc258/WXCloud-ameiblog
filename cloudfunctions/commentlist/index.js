// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: 'meiblog-86be65' })
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    let postid = event.postid
    return await db.collection('b_comment').where({
      postid: postid
    }).skip(offset).limit(limit).orderBy('ctime', 'desc').get({
      success: function (res) {
        console.log('>>>>>>comment list success: ', res)
        
      },
      fail: err => {
        console.log('>>>>>>comment list fail: ', err)
      }
    })
  } catch (e) {
    console.error(e)
  }
}
