"use strict";

/**
 * article router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::article.article", {
  only: [], // 空数组 = 禁用所有路由
});
