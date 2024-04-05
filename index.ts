import { writeFileSync } from "fs";

async function getData() {
  const apiKey = process.env.APIKEY || "DEMO_KEY";
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  try {
    const res = await fetch(url);
    const data = await res.json();
    writeFileSync("./public/Data.json", JSON.stringify(data, null, 2));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
