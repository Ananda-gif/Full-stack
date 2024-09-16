// PROCESSUS ENFANT comme mettre à jour sans couper et sans mise à jour
import { exec } from "node:child_process";

const [node, _, file] = process.argv;
exec("dir", (error, out, err) => {
  // exec : EXECUTER

  console.log({
    error,
    out,
    err,
  });
});
