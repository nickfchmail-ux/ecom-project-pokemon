import { Blob } from "buffer";
import "dotenv/config";
import fs from "node:fs";
const api_key = process.env.REMOVEBG_API_KEY;
const baseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

console.log(
  "API Key loaded:",
  api_key
    ? "Yes (hidden for security)"
    : "No - check your .env and run with --env-file=.env",
);

async function removeBg(blob) {
  if (!api_key) {
    throw new Error("API key is missing! Check your .env file.");
  }

  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": api_key },
    body: formData,
  });

  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    const errorText = await response.text();
    throw new Error(
      `${response.status}: ${response.statusText} - ${errorText}`,
    );
  }
}

async function getIMG(url) {
  try {
    const imageResponse = await fetch(url);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`);
    }
    const buffer = await imageResponse.arrayBuffer();
    console.log(`Buffer size: ${buffer.byteLength} bytes`); // Made log more useful (shows size instead of raw object)
    return new Blob([buffer]);
  } catch (error) {
    throw new Error(`Error fetching image from ${url}: ${error.message}`);
  }
}

async function getImgWithoutBG(url, outputFilename = null) {
  try {
    if (!outputFilename) {
      // Dynamic filename: Extract basename from URL (e.g., "3.png" -> "3-no-bg.png")
      const basename = url.split("/").pop();
      outputFilename = basename.replace(".png", "-no-bg.png");
    }
    const img = await getIMG(url);
    const bgRemovedImg = await removeBg(img);
    fs.writeFileSync(outputFilename, Buffer.from(bgRemovedImg));
    console.log(
      `Background removed successfully! Output saved as ${outputFilename}`,
    );
  } catch (error) {
    console.error("Error in getImgWithoutBG:", error.message);
    throw error;
  }
}

const arr = Array.from({ length: 10 }, (_, index) => index);

const result = await Promise.allSettled(
  arr.map((img) => {
    const url = baseUrl + `${img + 1}`;

    return getImgWithoutBG(url);
  }),
);
