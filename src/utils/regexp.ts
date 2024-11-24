// 参考：https://github.com/trentlee0/utools-any-rule/blob/master/src/RULES.js

/**
* 火车车次
* @exmaple
* ```ts
* 'G1868' 'D102' 'D9' 'Z5' 'Z24' 'Z17'
* ```
*/
export const  RexExp_TRAIN = /^[GCDZTSPKXLY1-9]\d{1,4}$/

/**
* 手机机身码(IMEI)
* @exmaple
* ```ts
* '123456789012345' '1234567890123456' '12345678901234567'
* ```
*/
export const  RexExp_PHONE_IMEI = /^\d{15,17}$/

/**
* 必须带端口号的网址(或ip)
* @exmaple
* ```ts
* 'https://www.qq.com:8080' '127.0.0.1:5050' 'baidu.com:8001' 'http://192.168.1.1:9090'
* ```
*/
export const  RexExp_URL_ORIGIN = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/

/**
* 网址(URL)
* @exmaple
* ```ts
* 'www.qq.com' 'https://vuejs.org/v2/api/#v-model' 'www.qq.99' '//www.qq.com' 'www.腾讯.cs' 'ftp://baidu.qq' 'http://baidu.com' 'https://www.amap.com/search?id=BV10060895&amp;city=420111&amp;geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&amp;query_type=IDQ&amp;query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&amp;zoom=10.15' '360.com:8080/vue/#/a=1&amp;b=2'
* ```
*/
export const  RexExp_URL = /^(((ht|f)tps?):\/\/)?([^!@#$%^&amp;*?.\s-]([^!@#$%^&amp;*?.\s]{0,63}[^!@#$%^&amp;*?.\s])?\.)+[a-z]{2,6}\/?/

/**
* 统一社会信用代码
* @exmaple
* ```ts
* '91230184MA1BUFLT44' '92371000MA3MXH0E3W'
* ```
*/
export const  RexExp_ID_CN = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/

/**
* 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
* @exmaple
* ```ts
* '91110108772551611J' '911101085923662400'
* ```
*/
export const  RexExp_ID_CN_ONE = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/

/**
* 迅雷链接
* @exmaple
* ```ts
* 'thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo='
* ```
*/
export const  RexExp_URL_THUNDER = /^thunderx?:\/\/[a-zA-Z\d]+=$/

/**
* ed2k链接(宽松匹配)
* @exmaple
* ```ts
* 'ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/'
* ```
*/
export const  RexExp_URL_ED2K = /^ed2k:\/\/\|file\|.+\|\/$/

/**
* 磁力链接(宽松匹配)
* @exmaple
* ```ts
* 'magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC'
* ```
*/
export const  RexExp_URL_MAGNET = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/

/**
* 子网掩码(不包含 0.0.0.0)
* @exmaple
* ```ts
* '255.255.255.0' '255.255.255.255' '255.240.0.0'
* ```
*/
export const  RexExp_SUBNET_MASK = /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/

/**
* linux&#34;隐藏文件&#34;路径
* @exmaple
* ```ts
* '/usr/ad/.dd' '/root/.gitignore' '/.gitignore'
* ```
*/
export const  RexExp_LINUX_HIDE_PATH = /^\/(?:[^/]+\/)*\.[^/]*/

/**
* linux文件夹路径
* @exmaple
* ```ts
* '/usr/ad/dd/' '/' '/root/' '/ a a / a / a a /'
* ```
*/
export const  RexExp_FOLDER_PATH = /^\/(?:[^/]+\/)*$/

/**
* linux文件路径
* @exmaple
* ```ts
* '/root/b.ts' '/root/abc'
* ```
*/
export const  RexExp_FILE_PATH = /^\/(?:[^/]+\/)*[^/]+$/

/**
* window&#34;文件夹&#34;路径
* @exmaple
* ```ts
* 'C:\Users\Administrator\Desktop' 'e:\m\'
* ```
*/
export const  RexExp_WINDOWS_PATH = /^[a-zA-Z]:\\(?:\w+\\?)*$/

/**
* window下&#34;文件&#34;路径
* @exmaple
* ```ts
* 'C:\Users\Administrator\Desktop\qq.link' 'e:\m\vscode.exe'
* ```
*/
export const  RexExp_WINDOWS_PATH_ONE = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/

/**
* 股票代码(A股)
* @exmaple
* ```ts
* 'sz000858' 'SZ002136' 'sz300675' 'SH600600' 'sh601155'
* ```
*/
export const  RexExp_STOCK_CODE_A = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/

/**
* 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数
* @exmaple
* ```ts
* '150' '100.5'
* ```
*/
export const  RexExp_SCOPE = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/

/**
* html注释
* @exmaple
* ```ts
* '&lt;!--&lt;div class=&#34;_bubble&#34;&gt;&lt;/div&gt;--&gt;&lt;div&gt;chenguzhen87&lt;/div&gt;&lt;div class=&#34;_bubble&#34;&gt;&lt;/div&gt;--&gt;'
* ```
*/
export const  RexExp_HTML_COMMENT = /&lt;!--[\s\S]*?--&gt;/g

/**
* md5格式(32位)
* @exmaple
* ```ts
* '21fe181c5bfc16306a6828c1f7b762e8'
* ```
*/
export const  RexExp_MD5 = /^[a-fA-F0-9]{32}$/

/**
* GUID/UUID
* @exmaple
* ```ts
* 'e155518c-ca1b-443c-9be9-fe90fdab7345' '41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D' '00000000-0000-0000-0000-000000000000'
* ```
*/
export const  RexExp_UUID = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i

/**
* 版本号(version)格式必须为X.Y.Z
* @exmaple
* ```ts
* '16.3.10'
* ```
*/
export const  RexExp_SEMVER = /^\d+(?:\.\d+){2}$/

/**
* 视频(video)链接地址（视频格式可按需增删）
* @exmaple
* ```ts
* 'http://www.abc.com/video/wc.avi'
* ```
*/
export const  RexExp_URL_VIDEO = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i

/**
* 图片(image)链接地址（图片格式可按需增删）
* @exmaple
* ```ts
* 'https://www.abc.com/logo.png' 'http://www.abc.com/logo.png'
* ```
*/
export const  RexExp_URL_IMAGE = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i

/**
* 24小时制时间（HH:mm:ss）
* @exmaple
* ```ts
* '23:34:55'
* ```
*/
export const  RexExp_TIME_24 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

/**
* 12小时制时间（hh:mm:ss）
* @exmaple
* ```ts
* '11:34:55'
* ```
*/
export const  RexExp_TIME_12 = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/

/**
* base64格式
* @exmaple
* ```ts
* 'data:image/gif;base64,xxxx=='
* ```
*/
export const  RexExp_URL_DATA = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&amp;',()*+;=\-._~:@/?%\s]*?)\s*$/i

/**
* 数字/货币金额（支持负数、千分位分隔符）
* @exmaple
* ```ts
* '100' '-0.99' '3' '234.32' '-1' '900' '235.09' '12,345,678.90'
* ```
*/
export const  RexExp_CURRENCY = /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/

/**
* 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
* @exmaple
* ```ts
* '6234567890' '6222026006705354000'
* ```
*/
export const  RexExp_NUMBER_BANK = /^[1-9]\d{9,29}$/

/**
* 中文姓名
* @exmaple
* ```ts
* '葛二蛋' '凯文·杜兰特' '德克·维尔纳·诺维茨基'
* ```
*/
export const  RexExp_NAME_CN = /^(?:[\u4e00-\u9fa5·]{2,16})$/

/**
* 英文姓名
* @exmaple
* ```ts
* 'James' 'Kevin Wayne Durant' 'Dirk Nowitzki'
* ```
*/
export const  RexExp_NAME_EN = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/

/**
* 车牌号(新能源)
* @exmaple
* ```ts
* '京AD92035' '甘G23459F' '京AA92035'
* ```
*/
export const  RexExp_CODE_CAR = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/

/**
* 车牌号(非新能源)
* @exmaple
* ```ts
* '京A00599' '黑D23908'
* ```
*/
export const  RexExp_CODE_CAR_ = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/

/**
* 车牌号(新能源+非新能源)
* @exmaple
* ```ts
* '京A12345D' '京A00599' '京AD92035' '甘G23459F' '京AA92035'
* ```
*/
export const  RexExp_CODE_CAR__ = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/

/**
* 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
* @exmaple
* ```ts
* '008618311006933' '+8617888829981' '19119255642' '19519255642'
* ```
*/
export const  RexExp_PHONE_2019 = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

/**
* 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
* @exmaple
* ```ts
* '008618311006933' '+8617888829981' '19119255642'
* ```
*/
export const  RexExp_PHONE_1319 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

/**
* 手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
* @exmaple
* ```ts
* '008618311006933' '+8617888829981' '19119255642'
* ```
*/
export const  RexExp_PHONE = /^(?:(?:\+|00)86)?1\d{10}$/

/**
* 日期(宽松)
* @exmaple
* ```ts
* '1990-12-12' '1-1-1' '0000-1-1'
* ```
*/
export const  RexExp_DATE = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/

/**
* 日期(严谨, 支持闰年判断)
* @exmaple
* ```ts
* '1990-12-12' '2000-02-29'
* ```
*/
export const  RexExp_DATE_ = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/

/**
* 中国省
* @exmaple
* ```ts
* '浙江' '台湾'
* ```
*/
export const  RexExp_PROVINCE = /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/

/**
* 可以被moment转化成功的时间 YYYYMMDD HH:mm:ss
* @exmaple
* ```ts
* '2020/01/01 23:59:59' '2020-01-01 00:00:00' '20200101 11:11:11'
* ```
*/
export const  RexExp_DATE_TIME = /^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

/**
* email(邮箱)
* @exmaple
* ```ts
* '90203918@qq.com' 'nbilly@126.com' '汉字@qq.com'
* ```
*/
export const  RexExp_EMAIL = /^(([^&lt;&gt;()[\]\\.,;:\s@&#34;]+(\.[^&lt;&gt;()[\]\\.,;:\s@&#34;]+)*)|(&#34;.+&#34;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
* 座机(tel phone)电话(国内),如: 0341-86091234
* @exmaple
* ```ts
* '0936-4211235' '89076543' '010-12345678-1234'
* ```
*/
export const  RexExp_PHONE_TEL = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/

/**
* 身份证号(1代,15位数字)
* @exmaple
* ```ts
* '123456991010193'
* ```
*/
export const  RexExp_ID_15 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/

/**
* 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
* @exmaple
* ```ts
* '12345619991205131x'
* ```
*/
export const  RexExp_ID_18= /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

/**
* 身份证号, 支持1/2代(15位/18位数字)
* @exmaple
* ```ts
* '622223199912051311' '12345619991205131x' '123456991010193'
* ```
*/
export const  RexExp_ID_1518 = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/

/**
* 护照（包含香港、澳门）
* @exmaple
* ```ts
* 's28233515' '141234567' '159203084' 'MA1234567' 'K25345719'
* ```
*/
export const  RexExp_ID_HK_ = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/

/**
* 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
* @exmaple
* ```ts
* 'justin' 'justin1989' 'justin_666'
* ```
*/
export const  RexExp_ACCOUNT = /^[a-zA-Z]\w{4,15}$/

/**
* 中文/汉字
* @exmaple
* ```ts
* '正则' '前端'
* ```
*/
export const  RexExp_CHINESE = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/

/**
* 小数(支持科学计数)
* @exmaple
* ```ts
* '0.0' '0.09' '4E+4'
* ```
*/
export const  RexExp_FLOAT = /^[+-]?(\d+([.]\d*)?([eE][+-]?\d+)?|[.]\d+([eE][+-]?\d+)?)$/

/**
* 只包含数字
* @exmaple
* ```ts
* '12345678'
* ```
*/
export const  RexExp_INT = /^\d+$/

/**
* html标签(宽松匹配)
* @exmaple
* ```ts
* '&lt;div id=&#34;app&#34;&gt; 2333 &lt;/div&gt;' '&lt;input type=&#34;text&#34;&gt;' '&lt;br&gt;'
* ```
*/
export const  RexExp_HTML_TAG = /&lt;(\w+)[^&gt;]*&gt;(.*?&lt;\/\1&gt;)?/

/**
* 匹配中文汉字和中文标点
* @exmaple
* ```ts
* '匹配中文汉字以及中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ ' （ ） 《 》 〈 〉 【 】 『 』 「 」 ﹃ ﹄ 〔 〕 … — ～ ﹏ ￥'
* ```
*/
export const  RexExp_CHINESE_TAG = /[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/

/**
* qq号格式正确
* @exmaple
* ```ts
* '903013545' '9020304'
* ```
*/
export const  RexExp_QQ = /^[1-9][0-9]{4,10}$/

/**
* 数字和字母组成
* @exmaple
* ```ts
* 'james666' 'haha233hi'
* ```
*/
export const  RexExp_ALPH = /^[A-Za-z0-9]+$/

/**
* 英文字母
* @exmaple
* ```ts
* 'Russel'
* ```
*/
export const  RexExp_LETTER = /^[a-zA-Z]+$/

/**
* 小写英文字母组成
* @exmaple
* ```ts
* 'russel'
* ```
*/
export const  RexExp_LETTER_LOW = /^[a-z]+$/

/**
* 大写英文字母
* @exmaple
* ```ts
* 'ABC' 'KD'
* ```
*/
export const  RexExp_LETTER_UP = /^[A-Z]+$/

/**
* 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
* @exmaple
* ```ts
* 'Kd@curry666'
* ```
*/
export const  RexExp_PASSWORD = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&amp;*? ])\S*$/

/**
* 用户名校验，4到16位（字母，数字，下划线，减号）
* @exmaple
* ```ts
* 'xiaohua_qq'
* ```
*/
export const  RexExp_USERNAME = /^[\w-]{4,16}$/

/**
* ip-v4[:端口]
* @exmaple
* ```ts
* '172.16.0.0' '172.16.0.0:8080' '127.0.0.0' '127.0.0.0:998'
* ```
*/
export const  RexExp_IP_V4 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/

/**
* ip-v6[:端口]
* @exmaple
* ```ts
* '2031:0000:130f:0000:0000:09c0:876a:130b' '[2031:0000:130f:0000:0000:09c0:876a:130b]:8080'
* ```
*/
export const  RexExp_IP_V6 = /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i

/**
* 16进制颜色
* @exmaple
* ```ts
* '#f00' '#F90' '#000' '#fe9de8' '#f8f8f8ff' '#f003'
* ```
*/
export const  RexExp_COLOR_HEX = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/

/**
* 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
* @exmaple
* ```ts
* 'github666' 'kd_-666'
* ```
*/
export const  RexExp_WECHAT = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/

/**
* 邮政编码(中国)
* @exmaple
* ```ts
* '734500' '100101'
* ```
*/
export const  RexExp_POST = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

/**
* 中文和数字
* @exmaple
* ```ts
* '哈哈哈' '你好6啊'
* ```
*/
export const  RexExp_CHINESE_AND_NUMBER = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/

/**
* 不能包含字母
* @exmaple
* ```ts
* '你好6啊' '@¥()！'
* ```
*/
export const  RexExp_NOT_LETTER = /^[^A-Za-z]*$/

/**
* java包名
* @exmaple
* ```ts
* 'com.bbb.name'
* ```
*/
export const  RexExp_JAVA_PKG = /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/

/**
* mac地址
* @exmaple
* ```ts
* '38:f9:d3:4b:f5:51' '00-0C-29-CA-E4-66'
* ```
*/
export const  RexExp_MAC = /^(([a-f0-9][0,2,4,6,8,a,c,e]:([a-f0-9]{2}:){4})|([a-f0-9][0,2,4,6,8,a,c,e]-([a-f0-9]{2}-){4}))[a-f0-9]{2}$/i

/**
* 匹配连续重复的字符
* @exmaple
* ```ts
* '我我我' '112233' '11234'
* ```
*/
export const  RexExp_STRING_REPEAT = /(.)\1+/

/**
* 数字和英文字母组成，并且同时含有数字和英文字母
* @exmaple
* ```ts
* '我a我1我' 'a对1'
* ```
*/
export const  RexExp_LETTER_AND_NUMBER = /^(?=.*[a-zA-Z])(?=.*\d).+$/

/**
* 香港身份证 
* @exmaple
* ```ts
* 'K034169(1)'
* ```
*/
export const  RexExp_ID_HK = /^[a-zA-Z]\d{6}\([\dA]\)$/

/**
* 澳门身份证 
* @exmaple
* ```ts
* '5686611(1)'
* ```
*/
export const  RexExp_ID_AO = /^[1|5|7]\d{6}\(\d\)$/

/**
* 台湾身份证 
* @exmaple
* ```ts
* 'U193683453'
* ```
*/
export const  RexExp_ID_TW = /^[a-zA-Z][0-9]{9}$/

/**
* 大写字母，小写字母，数字，特殊符号 `@#$%^&amp;*`~()-+=` 中任意3项密码
* @exmaple
* ```ts
* 'a1@' 'A1@' 'Aa@'
* ```
*/
export const  RexExp_PASSWORD_3 = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&amp;*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&amp;*`~()-+=]+$)(?![0-9\W_!@#$%^&amp;*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&amp;*`~()-+=]/

/**
* ASCII码表中的全部的特殊字符
* @exmaple
* ```ts
* '[' '.' '^' '&amp;3%'
* ```
*/
export const  RexExp_ASCII_SPECIAL = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/

/**
* 正整数，不包含0
* @exmaple
* ```ts
* '1231'
* ```
*/
export const  RexExp_NUMBER = /^\+?[1-9]\d*$/

/**
* 负整数，不包含0
* @exmaple
* ```ts
* '-1231'
* ```
*/
export const  RexExp_NUMBER_ = /^-[1-9]\d*$/

/**
* 整数
* @exmaple
* ```ts
* '-1231' '123' '0'
* ```
*/
export const  RexExp_N = /^(?:0|(?:-?[1-9]\d*))$/

/**
* 浮点数
* @exmaple
* ```ts
* '1.23' '-1.01' '0.00'
* ```
*/
export const  RexExp_FLOAT_ = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/

/**
* 浮点数(严格)
* @exmaple
* ```ts
* '1.23' '-1.01'
* ```
*/
export const  RexExp_FLOAT__ = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/

/**
* email(支持中文邮箱)
* @exmaple
* ```ts
* '90203918@qq.com' 'nbilly@126.com' '啦啦啦@126.com'
* ```
*/
export const  RexExp_EMAIL_CN = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

/**
* 域名(非网址, 不包含协议)
* @exmaple
* ```ts
* 'www.baidu.com' 'baidu.com' 'baidu.com.cn' 'api.baidu.com' 'nodejs.org' 'nodejs.cn'
* ```
*/
export const  RexExp_URL_HOST = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/

/**
* 军官/士兵证
* @exmaple
* ```ts
* '军字第2001988号' '士字第P011816X号'
* ```
*/
export const  RexExp_ID_SOILDER = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/

/**
* 户口薄
* @exmaple
* ```ts
* '441421999707223115'
* ```
*/
export const  RexExp_ID_HR = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/