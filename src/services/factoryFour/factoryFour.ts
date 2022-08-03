// Utils
import { getData } from "../../utils/functions";

// Types
import { StatusResponse } from "./facotyFour.types";

const API_DOMAIN = "https://api.factoryfour.com";
const HEROKU_CORS_DOMAIN = "https://cors-anywhere.herokuapp.com";
const ENDPOINTS_STATUS = "health/status";

async function getAccounts() {
  const res = await getData(`${API_DOMAIN}/accounts/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Accounts",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getAssets() {
  const res = await getData(`${API_DOMAIN}/assets/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Assets",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getCustomers() {
  const res = await getData(`${API_DOMAIN}/customers/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Customers",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getDataPoints() {
  const res = await getData(`${API_DOMAIN}/datapoints/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Data Points",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getDevices() {
  const res = await getData(`${API_DOMAIN}/devices/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Devices",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getDocuments() {
  const res = await getData(`${API_DOMAIN}/documents/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Documents",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getForms() {
  const res = await getData(`${API_DOMAIN}/forms/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Forms",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getInvites() {
  const res = await getData(
    `${HEROKU_CORS_DOMAIN}/${API_DOMAIN}/invites/${ENDPOINTS_STATUS}`
  );
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Invites",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getMedia() {
  const res = await getData(`${API_DOMAIN}/media/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Media",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getMessages() {
  const res = await getData(
    `${HEROKU_CORS_DOMAIN}/${API_DOMAIN}/messages/${ENDPOINTS_STATUS}`
  );
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Messages",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getNamespaces() {
  const res = await getData(`${API_DOMAIN}/namespaces/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Namespaces",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getOrders() {
  const res = await getData(`${API_DOMAIN}/orders/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Orders",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getPatients() {
  const res = await getData(`${API_DOMAIN}/patients/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Patients",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getRelationships() {
  const res = await getData(`${API_DOMAIN}/relationships/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Relationships",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getRules() {
  const res = await getData(`${API_DOMAIN}/rules/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Rules",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getTemplates() {
  const res = await getData(`${API_DOMAIN}/templates/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Templates",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getUsers() {
  const res = await getData(
    `${HEROKU_CORS_DOMAIN}/${API_DOMAIN}/users/${ENDPOINTS_STATUS}`
  );
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Users",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
}

async function getWorkflows() {
  const res = await getData(`${API_DOMAIN}/workflows/${ENDPOINTS_STATUS}`);
  const data: StatusResponse | null = res?.data ?? null;
  return {
    name: "Workflows",
    hostname: data?.hostname ?? null,
    success: data?.success ?? false,
    message: data?.message ?? null,
    time: data?.time ?? null,
    error: res?.error ?? null,
    status: res.status
  } as StatusResponse;
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
