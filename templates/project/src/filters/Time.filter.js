// moment-timezone
import moment from 'moment-timezone';
// endmoment-timezone

const filters = {
  // moment-timezone
  // 格式化时间
  FDate: (value, formatType = 'YYYY-MM-DD hh:mm:ss') => {
    return value && typeof (value-0) == 'number' ? moment(parseInt(value)).format(formatType) : '--';
  },
  // endmoment-timezone
  // 倒计时
  FCountDown: (value, formatType = 'auto') => {
    const formatRule = formatType == 'auto' ? 'hh:mm:ss' : formatType;
    let h = 0;
    let m = 0;
    let s = 0;
    if (value > 3600000) {
      h = parseInt(value/3600000);
      m = parseInt((value - h*3600000)/60000);
      s = parseInt((value - h*3600000 - m*60000)/1000);
    } else {
      m = parseInt(value/60000);
      s = parseInt((value-m*60000)/1000);
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s
    }
    const o = {
      "h+" : h,                   //小时   
      "m+" : m,                 //分   
      "s+" : s,                 //秒
    };  
    if (format == 'auto' && value < 3600000) {
      return `${m}:${s}`;
    } else {
      let fmt = formatRule;
      if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, ("").substr(4 - RegExp.$1.length)); 
      }
      for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
      }
      return fmt;
    }
  }
};

export default filters;