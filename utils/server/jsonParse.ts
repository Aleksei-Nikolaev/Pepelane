import { fileURLToPath } from 'url';
import * as fs from "fs";

const getModulesPath = fileURLToPath(new URL('../../db/vehicles.json', import.meta.url))


export const jsonParse = () => {
  const jsonString = fs.readFileSync(getModulesPath, "utf-8");

  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Ошибка при парсинге JSON:", error);
  }
};
