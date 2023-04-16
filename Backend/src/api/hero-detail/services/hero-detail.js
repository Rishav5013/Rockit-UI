'use strict';

/**
 * hero-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-detail.hero-detail');
