import dayjs from 'dayjs'

function dayComputed(time) {
    let res = 0;
    if (dayjs().diff(time) > 60000 && dayjs().diff(time) < 3600000) {
        res = Math.round(dayjs().diff(time, "minute", true)) + "分钟前";
    } else if (dayjs().diff(time) > 3600000 && dayjs().diff(time) < 86400000) {
        res = Math.round(dayjs().diff(time, "hour", true)) + "小时前";
    } else if (dayjs().diff(time) > 86400000 && dayjs().diff(time) < 2592000000) {
        res = Math.round(dayjs().diff(time, "day", true)) + "天前";
    } else if (dayjs().diff(time) > 2592000000 && dayjs().diff(time) < 31536000000) {
        res = Math.round(dayjs().diff(time, "month", true)) + "月前";
    } else {
        res = Math.round(dayjs().diff(time, "year", true)) + "年前";
    }
    return res;
}

export { dayComputed }