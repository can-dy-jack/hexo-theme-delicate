'use strict';

// crypto.createHash() 创建并返回可用于使用给定算法生成哈希摘要的哈希对象。
const crypto = require('crypto');

// 创建唯一哈希值 - 用于id（保证id不重复）
hexo.extend.helper.register('hash', function(string) {
  // 只保留20位就够了
  return crypto.createHash('sha1').update(string).digest('hex').slice(0,20);
});
