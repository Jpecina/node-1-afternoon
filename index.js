let express = require("express"); 
let bodyParser = require("body-parser");
const { create ,read, update, destroy } = require("./server/controllers/messages_controller")
let app = express();
let port = 3000;
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );




app.get("/api/messages",read);
app.post("/api/messages",create);
app.put("/api/messages/:id",update)
app.delete("/api/messages/:id",destroy)


app.listen(port, () => {
    console.log(`listening on port : ${port}.`)
});
