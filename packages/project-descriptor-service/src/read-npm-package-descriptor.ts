import fs from "fs";
import path from "path";

export type ProjectName = string;
export type ProjectVersion = string;

export interface NpmPackageDescriptor {
  type: "npm";
  name: string;
  description: string;
  scripts: {
    [key: string]: string;
  };
  dependencies: {
    [projectName: string]: ProjectVersion;
  };
  devDependencies: {
    [projectName: string]: ProjectVersion;
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
