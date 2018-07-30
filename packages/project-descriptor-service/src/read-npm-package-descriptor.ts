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
    [projectName: ProjectName]: ProjectVersion;
  };
  devDependencies: {
    [projectName: ProjectName]: ProjectVersion;
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
