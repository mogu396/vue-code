import request from './request'

// 这里的data需要参照api文档所需要的参数来传入,getTopics的data是一个配置对象
export function getTopics(data){
    // axios返回一个promise对象
    return request({
        url:'/topics',
        method:'get',
        params:data
    })
}

// data是用户id
export function getTopicDetail(data){
    return request({
        url:'/topics/'+data,
        method:'get'
    })
}

// data是loginname
export function getUserDetail(data){
    return request({
        url:'/user/'+data,
        method:'get'
    })
}