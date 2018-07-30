import { NpmPackageDescriptor, ProjectName, ProjectVersion } from "./read-npm-package-descriptor";
import { map, pipe } from "ramda";

export function getProjectDependencies(
  packageDescriptor: NpmPackageDescriptor
) {
  const { devDependencies, dependencies } = packageDescriptor;

  const asDependency = (isDevelopmentOnly: boolean) => {
    return (value: [ProjectName, ProjectVersion]) => {
      const [projectName, projectVersion] = value;
      return {
        name: projectName,
        specifiedVersion: projectVersion,
        actualVersion: null,
        isDevelopmentOnly
      };
    };
  };

  const convertToDependencies = (isDevelopmentOnly: boolean) =>
    pipe(
      Object.entries,
      map<[ProjectName, ProjectVersion], ReturnType<ReturnType<typeof asDependency>>>(
        asDependency(isDevelopmentOnly)
      )
    );

  return [
    ...convertToDependencies(false)(dependencies),
    ...convertToDependencies(true)(devDependencies)
  ];
}
