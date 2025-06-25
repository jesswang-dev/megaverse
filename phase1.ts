import { fetchGoalMap, createPolyanet } from "./apis";

async function main() {
  const map = await fetchGoalMap();
  //   console.log("Fetched goal map:", map);

  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const cell = map[row][column];
      if (cell === "SPACE") continue;
      else if (cell === "POLYANET") {
        await createPolyanet(row, column);
        console.log(`Created Polyanet at (${row}, ${column})`);
      }
    }
  }
  //   console.log("All Polyanets created successfully.");
}

main();
