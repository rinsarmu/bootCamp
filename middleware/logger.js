import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = (req, res, next) => {
  const { ip, originalUrl, hostname, protocol } = req;
  const data = `Incoming request from ${ip} to ${protocol}://${hostname}${originalUrl} at ${requestedTime()} \n`;
  // fs.writeFile(
  //   path.join(__dirname, "..", "loggerData", "data.txt"),
  //   data,
  //   (err) => {
  //     if (err) {
  //       console.log("An error occurred:", err);
  //     } else {
  //       console.log("The file has been saved!");
  //     }
  //   }
  // );

  console.log(path.dirname());
  next();
};

const requestedTime = () => {
  const now = new Date();
  const hours = now.getHours(); // get the current hour (0-23)
  const minutes = now.getMinutes(); // get the current minute (0-59)
  const seconds = now.getSeconds(); // get the current second (0-59)

  const amOrPm = hours >= 12 ? "PM" : "AM"; // determine whether it's AM or PM

  const formattedTime = `${hours % 12}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amOrPm}`; // format the time as "hh:mm:ss AM/PM"

  return formattedTime;
};

export { logger };
