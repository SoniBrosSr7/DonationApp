import axios from "axios";

const BASE_URL = "http://localhost:9800/donors";

export async function saveDonor(donor) {
  return axios.post(BASE_URL, donor);
}

export async function getDonor(donor) {
  return axios.get(BASE_URL, donor);
}
export function getDetails(id) {
  return axios.get(`${BASE_URL}/${id}`);
}
export async function getDonorFromServer() {
  return axios.get(BASE_URL);
}

export async function getAllStudentsFromServer() {
  return axios.get(BASE_URL);
}

export function editDonorFromServer(id) {
  return axios.put(`${BASE_URL}/${id}`);
}

export function getStudentsByNamePattern(pattern) {
  return axios.get(`${BASE_URL}/name/${pattern}`);
}
