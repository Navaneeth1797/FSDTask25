import express from "express";
import fs from 'fs'
import { format } from "date-fns";
import path from 'path'
let PORT = process.env.PORT || 8009;

let app = express();
app.use(express.json());
app.get('/', (req, res) => {
    let DateandTime = format(
      new Date(),
      'dd-MM-yyyy-HH-mm-ss'
    );
    let folderName = `Date&Time/${DateandTime}.txt`;
    fs.writeFileSync(folderName, `${DateandTime}`, 'utf8')
    let data = fs.readFileSync(folderName, 'utf8')
    try {
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('error')
    }
})
app.get("/txtdata", (req,res) => {
  let folderPath = "Date&Time";

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send("Files not found");
    } else {
      let txtFiles = files.filter((file) => path.extname(file) === ".txt");
      res.status(200).json(txtFiles);
    }
  });
});


app.listen(PORT,()=>console.log(`app is listening on ${PORT}`))

