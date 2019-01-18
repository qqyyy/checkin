var Bmob = require('utils/bmob.js');
import { ToastPannel } from './component/toastTest/toastTest';
if (!Array.prototype.findIndex) {
  require('./utils/array-findIndex')
}
 //var BmobSocketIo = require('utils/bmobSocketIo.js').BmobSocketIo;
 //const BmobSocketIo = require('utils/tunnel');
Bmob.initialize(
  "05bd82c0ecf66c513997f303f91db4da",
  "f52b3ee705ca6f41a7c59e4b2f7f0270"
)
App({
  ToastPannel,
  onLaunch: function () {
    var user = new Bmob.User() //开始注册用户
    user.auth().then(function (obj) {
      console.log('登陆成功')
    },
      function (err) {
        console.log('失败了', err)
      });




    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //this.setServerUrl();
    this.AppMusic = wx.createInnerAudioContext();
    this.AppMusic.autoplay = true;
    this.AppMusic.loop = true;
    this.AppMusic.onPlay(() => {
      console.log('开始播放')
    })
    this.AppMusic.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
