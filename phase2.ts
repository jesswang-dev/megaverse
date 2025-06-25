import {
  fetchGoalMap,
  createPolyanet,
  createCometh,
  createSoloon,
  delay,
} from "./apis";
import type { Color, Direction } from "./apis";

async function main() {
  const map = await fetchGoalMap();
  // console.log("Fetched goal map:", map);

  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const cell = map[row][column];
      if (cell === "SPACE") continue;
      try {
        if (cell === "POLYANET") {
          await createPolyanet(row, column);
          console.log(`Created Polyanet at (${row}, ${column})`);
        } else {
          const [prefix, type] = cell.split("_");
          if (type === "SOLOON") {
            const color = prefix as Color;
            await createSoloon(row, column, color);
            console.log(`Created Soloon at (${row}, ${column})`);
          } else if (type === "COMETH") {
            const direction = prefix as Direction;
            await createCometh(row, column, direction);
            console.log(`Created Cometh at (${row}, ${column})`);
          }
        }
        await delay(1000);
      } catch (error) {
        console.error(`Error creating ${cell} at (${row}, ${column}):`, error);
      }
    }
  }
}

main();
