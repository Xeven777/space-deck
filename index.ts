import { writeFileSync } from "fs";

async function getData() {
  const apiKey = process.env.APIKEY || "DEMO_KEY";
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const date = new Date();
    const kolkataDate = date.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    console.log(date);
    writeFileSync("./src/Data.json", JSON.stringify(data, null, 2));
    const content = `
# NASA's Picture of the Day 🧑‍🚀💫

  ![NASA APOD](${data.hdurl})
  
  ## ${data.title} 🪄🌌
  
  _${data.date}_
  
  ### About The Image ✨: 
  
  ${data.explanation}
  
  
  
  > _Last Updated: ${kolkataDate} (in GMT)_
  `;
    writeFileSync("README.md", content);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
