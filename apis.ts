import axios from "axios";

const CANDIDATE_ID = "158c86ef-3824-4a0b-9609-a5862b396ccf";
const BASE_URL = "https://challenge.crossmint.io/api";

type Cell = "SPACE" | "POLYANET" | `${Color}_SOLOON` | `${Direction}_COMETH`;
export type Color = "BLUE" | "RED" | "PURPLE" | "WHITE";
export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type GoalMap = Cell[][];

export async function fetchGoalMap(): Promise<GoalMap> {
  const { data } = await axios.get(`${BASE_URL}/map/${CANDIDATE_ID}/goal`);
  return data.goal;
}

export async function createPolyanet(row: number, column: number) {
  return axios.post(`${BASE_URL}/polyanets`, {
    row,
    column,
    candidateId: CANDIDATE_ID,
  });
}

export async function createSoloon(row: number, column: number, color: Color) {
  return axios.post(`${BASE_URL}/soloons`, {
    row,
    column,
    color: color.toLowerCase(),
    candidateId: CANDIDATE_ID,
  });
}

export async function createCometh(
  row: number,
  column: number,
  direction: Direction
) {
  return axios.post(`${BASE_URL}/comeths`, {
    row,
    column,
    direction: direction.toLowerCase(),
    candidateId: CANDIDATE_ID,
  });
}

async function deletePolyanet(row: number, column: number) {
  await axios.delete(`${BASE_URL}/polyanets`, {
    data: {
      row,
      column,
      candidateId: CANDIDATE_ID,
    },
  });
}

async function deleteSoloon(row: number, column: number) {
  await axios.delete(`${BASE_URL}/soloons`, {
    data: {
      row,
      column,
      candidateId: CANDIDATE_ID,
    },
  });
}

async function deleteCometh(row: number, column: number) {
  await axios.delete(`${BASE_URL}/comeths`, {
    data: {
      row,
      column,
      candidateId: CANDIDATE_ID,
    },
  });
}

export async function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
