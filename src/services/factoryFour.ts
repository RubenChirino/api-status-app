import { getData } from "../utils/functions";

const API_DOMAIN = "https://api.factoryfour.com";
const HEROKU_CORS_DOMAIN = "https://cors-anywhere.herokuapp.com";
const ENDPOINTS_STATUS = "health/status";

function getAccounts() {
  return getData(`${API_DOMAIN}/accounts/${ENDPOINTS_STATUS}`);
}

function getAssets() {
  return getData(`${API_DOMAIN}/assets/${ENDPOINTS_STATUS}`);
}

function getCustomers() {
  return getData(`${API_DOMAIN}/customers/${ENDPOINTS_STATUS}`);
}

function getDataPoints() {
  return getData(`${API_DOMAIN}/datapoints/${ENDPOINTS_STATUS}`);
}

function getDevices() {
  return getData(`${API_DOMAIN}/devices/${ENDPOINTS_STATUS}`);
}

function getDocuments() {
  return getData(`${API_DOMAIN}/documents/${ENDPOINTS_STATUS}`);
}

function getForms() {
  return getData(`${API_DOMAIN}/forms/${ENDPOINTS_STATUS}`);
}

function getInvites() {
  return getData(
    `${HEROKU_CORS_DOMAIN}${API_DOMAIN}/invites/${ENDPOINTS_STATUS}`
  );
}

function getMedia() {
  return getData(`${API_DOMAIN}/media/${ENDPOINTS_STATUS}`);
}

function getMessages() {
  return getData(
    `${HEROKU_CORS_DOMAIN}${API_DOMAIN}/messages/${ENDPOINTS_STATUS}`
  );
}

function getNamespaces() {
  return getData(`${API_DOMAIN}/namespaces/${ENDPOINTS_STATUS}`);
}

function getOrders() {
  return getData(`${API_DOMAIN}/orders/${ENDPOINTS_STATUS}`);
}

function getPatients() {
  return getData(`${API_DOMAIN}/patients/${ENDPOINTS_STATUS}`);
}

function getRelationships() {
  return getData(`${API_DOMAIN}/relationships/${ENDPOINTS_STATUS}`);
}

function getRules() {
  return getData(`${API_DOMAIN}/rules/${ENDPOINTS_STATUS}`);
}

function getTemplates() {
  return getData(`${API_DOMAIN}/templates/${ENDPOINTS_STATUS}`);
}

function getUsers() {
  return getData(
    `${HEROKU_CORS_DOMAIN}${API_DOMAIN}/users/${ENDPOINTS_STATUS}`
  );
}

function getWorkflows() {
  return getData(`${API_DOMAIN}/workflows/${ENDPOINTS_STATUS}`);
}

export {
  getAccounts,
  getAssets,
  getCustomers,
  getDataPoints,
  getDevices,
  getDocuments,
  getForms,
  getInvites,
  getMedia,
  getMessages,
  getNamespaces,
  getOrders,
  getPatients,
  getRelationships,
  getRules,
  getTemplates,
  getUsers,
  getWorkflows
};
