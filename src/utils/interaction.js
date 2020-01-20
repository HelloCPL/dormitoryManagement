// 交互方法
import tools from '@js/tools'

// 提示
export const toast = (params) => {
    let obj = {
        title: '操作成功',
        icon: 'none',
        image: '',
        duration: 2000,
        mask: false
    }
    if (tools.isObject(params)) {
        obj.title = params.title || obj.title
        obj.icon = params.icon || obj.icon
        obj.image = params.image || obj.image
        obj.duration = params.duration || obj.duration
        obj.mask = tools.isBoolean(params.mask) ? params.mask : obj.mask
    } else if (tools.isString(params) || tools.isNumber(params)) {
        obj.title = params || obj.title
    }
    wx.showToast(obj)
}

// 加载效果
export const showLoading = (params) => {
    let obj = {
        title: '加载中...',
        mask: true
    }
    if (tools.isObject(params)) {
        obj.title = params.title || obj.title
        obj.mask = tools.isBoolean(params.mask) ? params.mask : obj.mask
    } else if (tools.isString(params) || tools.isNumber(params)) {
        obj.title = params || obj.title
    }
    wx.showLoading(obj)
}

// 隐藏加载
export const hideLoading = () => {
    wx.hideLoading()
}

// 确认取消
export const confirm = (params) => {
    let obj = {
        title: '',
        content: '',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#80848f',
        confirmText: '确定',
        confirmColor: '#1989FA'
    }
    if (tools.isObject(params)) {
        obj.title = params.title || obj.title
        obj.content = params.content || obj.content
        obj.showCancel = params.showCancel || obj.showCancel
        obj.cancelText = params.cancelText || obj.cancelText
        obj.cancelColor = params.cancelColor || obj.cancelColor
        obj.confirmText = params.confirmText || obj.confirmText
        obj.confirmColor = params.confirmColor || obj.confirmColor
    } else if (tools.isString(params) || tools.isNumber(params)) {
        obj.content = params || obj.content
    }
    return new Promise((resolve, reject) => {
        wx.showModal({
            ...obj,
            success: function (res) {
                console.log(res)
                if (res.confirm) {
                    resolve()
                } else {
                    reject()
                }
            },
            fail: function () {
                reject()
            }
        })
    })
}

// 确定框
export const alert = (params) => {
    let obj = {
        title: '',
        content: '',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#1989FA'
    }
    if (tools.isObject(params)) {
        obj.title = params.title || obj.title
        obj.content = params.content || obj.content
        obj.confirmText = params.confirmText || obj.confirmText
        obj.confirmColor = params.confirmColor || obj.confirmColor
    } else if (tools.isString(params) || tools.isNumber(params)) {
        obj.content = params || obj.content
    }
    return new Promise((resolve) => {
        wx.showModal({
            ...obj,
            success: function (res) {
                resolve()
            }
        })
    })
}