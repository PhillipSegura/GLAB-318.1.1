/* export const firstName = `Optimus`;
export const lastName = "Prime";
 */
//npm init -y
//npm i nodemon

//npm init or //npm -y (to skip defaults)
//npm i -g nodemon

//Mac Users
//sudo npm i -g nodemon
//password

const http = require("http");
const PORT = 3000;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Let there be Light!");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Both the refridgerator and your server is running"${PORT}`);
  });
