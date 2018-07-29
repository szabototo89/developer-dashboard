import { NpmPackageDescriptor } from "./read-npm-package-descriptor";

export function getNpmScripts({ scripts }: NpmPackageDescriptor) {
  const scriptEntries = Object.entries(scripts);

  return scriptEntries.reduce<Array<{ name: string; command: string }>>(
    (previousValue, [name, command]) => {
      return [...previousValue, { name, command }];
    },
    []
  );
}
