'use strict';

/**
 * article lifecycles
 */

const setPostedTimeFromPublishedAt = (data) => {
  if (data.publishedAt && !data.postedTime) {
    data.postedTime = data.publishedAt;
  }
};

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    setPostedTimeFromPublishedAt(data);
  },

  beforeUpdate(event) {
    const { data } = event.params;

    setPostedTimeFromPublishedAt(data);
  },
};
