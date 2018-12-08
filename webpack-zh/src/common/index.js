import { sample as lodashSample } from "lodash";

export function sample(arr) {
  console.log("common module");
  return lodashSample(arr);
}
