import { spawn } from "child_process";

export function executeJavaScript(code , input= "") {
  return new Promise((resolve) => {
    const process = spawn("node",["-e",code]);
  })

  let output="";
  let error="";

  process.stderr.on
}