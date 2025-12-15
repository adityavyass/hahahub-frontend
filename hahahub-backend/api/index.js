const strapi = require('@strapi/strapi');

let instance;

async function createStrapi() {
  if (!instance) {
    instance = await strapi().load();
  }
  return instance;
}

module.exports = async (req, res) => {
  const app = await createStrapi();
  return app.server.requestHandler(req, res);
};