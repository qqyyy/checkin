// pages/mycard/mycard.js
var Bmob = require('../../utils/bmob.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mycard:'',
    mycardbj: '',
  },




  onShareAppMessage: function (res) {
    return {
      title: '[有人@我]快来看看我的新名片',
      path: '/pages/mycard/mycard',
      imageUrl: 'http://img1.2345.com/duoteimg/zixunImg/local/2017/04/12/1491991572815.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
















  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userid = options.userid;
    var Diary = Bmob.Object.extend("mycard");
    var query = new Bmob.Query(Diary);
    query.equalTo("parent", userid);
    query.find({
      success: function (results) {
        console.log(results[0]);
        that.setData({
          mycard: results[0]
        })
      },
    });

    var Diary = Bmob.Object.extend("sucai");
    var query = new Bmob.Query(Diary);
    query.equalTo("title", 'mpbj');
    query.find({
      success: function (results) {
        console.log(results[0]);
        that.setData({
          mycardbj: results[0]
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {
  
  },

  cancopy:function(e)
  {
    console.log(e.currentTarget.dataset.id)
    wx.setClipboardData({
      data: e.currentTarget.dataset.id,
    })
  },
})