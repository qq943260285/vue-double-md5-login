export default {
  /**
   * 用户名限制正则表达式
   * <p>
   * 字母、数字、中文、-、_
   */
  USER_NAME_REGEXP: /^[a-zA-Z0-9-_\u4e00-\u9fa5]{4,16}$/,

  /**
   * 手机正则表达式
   */
  MOBILE_REGEXP: /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[35678]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|66\d{2})\d{6}$/,
  /**
   * 中国移动正则表达式
   */
  CHINA_MOBILE_REGEXP: /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|8[23478]\d|(?:78|98)\d)\d{7}$ /,
  /**
   * 中国联通正则表达式
   */
  CHINA_UNICOM_MOBILE_REGEXP: /^(?:\+?86)?1(?:3[0-2]|[578][56]|66)\d{8}$ /,
  /**
   * 中国电信正则表达式
   */
  CHINA_TELECOM_MOBILE_REGEXP: /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[19]\d{2})\d{6}$/,

  /**
   * 邮箱正则表达式
   */
  EMAIL_REGEXP: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  /**
   * MD5正则表达式
   */
  MD5_REGEXP: /^[a-fA-F0-9]{32}$/,
  /**
   * 验证码正则表达式
   */
  CODE_REGEXP: /^[a-zA-Z\d]{4}$/,

}
