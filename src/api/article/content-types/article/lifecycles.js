"use strict";

/**
 * article lifecycles
 */

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    // 如果正在发布（publishedAt 有值）且 postedTime 为空，则设置 postedTime 为 publishedAt 的值
    if (data.publishedAt && !data.postedTime) {
      data.postedTime = data.publishedAt;
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    // 如果正在发布（publishedAt 有值且不为 null）且 postedTime 为空，则设置 postedTime 为 publishedAt 的值
    if (data.publishedAt && !data.postedTime) {
      data.postedTime = data.publishedAt;
    }
  },
};
