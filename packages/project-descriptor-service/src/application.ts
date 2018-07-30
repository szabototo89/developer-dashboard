import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { readNpmPackageDescriptor } from "./read-npm-package-descriptor";
import { getNpmScripts } from "./get-npm-scripts";

export function getWatchPath() {
  const applicationArguments = process.argv.slice(2);
  return applicationArguments[0] || "./";
}

export function initializeApplication({ portNumber = 80 } = {}) {
  const application = express();

  application.use(cors());
  application.use(bodyParser.json());

  application.get("/project", (request, response) => {
    response.json(readNpmPackageDescriptor(getWatchPath()));
  });

  application.get("/project/script", (request, response) => {
    const packageDescriptor = readNpmPackageDescriptor(getWatchPath());
    const npmScripts = getNpmScripts(packageDescriptor);
    response.json(npmScripts);
  });

  application.listen(portNumber, () =>
    console.log(`Project Descriptor Service is running on http://localhost:${portNumber}`)
  );
}
