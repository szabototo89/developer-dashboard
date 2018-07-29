import fs from "fs";
import path from "path";

export interface NpmPackageDescriptor {
  type: "npm";
  name: string;
  description: string;
  scripts: {
    [key: string]: string;
  };
}

export function readNpmPackageDescriptor(
  projectPath: string
): NpmPackageDescriptor {
  const fileContent = fs.readFileSync(
    path.resolve(projectPath, "./package.json"),
    "utf-8"
  );
  const projectDescriptor = JSON.parse(fileContent);
  return {
    ...projectDescriptor,
    type: "npm"
  };
}
