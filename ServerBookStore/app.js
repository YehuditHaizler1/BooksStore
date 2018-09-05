const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

const basePath = path.join(__dirname +"/dist" );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});

fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});


function validName(name) {
    console.log(name.length);
    return name.length >= 3 && name.length <= 15 && name.match(/^[ a-zA-Z]*$/);
}

function validPassword(password) {
    console.log(password.length);
    return password.length >= 5 && password.length <= 10;
}

function isValidLoginner(user) {
    if (!(validName(user["UserName"]) && validPassword(user["Password"])))
        return false;
    return true;
}

function isValidRegister(user) {
    if (!(validName(user["FirstName"]) && validName(user["LastName"]) && validName(user["UserName"]) && validPassword(user["Password"])))
        return false;
    return true;
}
app.post("/api/login", (req, res) => {
    console.log(req.body);
    if (isValidLoginner(req.body)) {
        let currentList = require("./users.json");
        let user = currentList.find(user => {return req.body["UserName"] == user.UserName && req.body["Password"] == user.Password})
        console.log(user);
        if (user != null) {
            console.log("added" + JSON.stringify(user));
            res.status(201).send(JSON.stringify(user));
        }
        else {
            console.log("not added");
            res.status(400).send();
        }
    }
    else res.status(400).send();
})
app.post("/api/register", (req, res) => {
    console.log("post");
    console.log(req.body);
    if (isValidRegister(req.body)) {
        let currentList = require("./users.json");
        currentList.push(req.body);
        fs.writeFileSync("users.json", JSON.stringify(currentList));
        console.log("good!!!");
        res.status(201).send(JSON.stringify(currentList));
    }
    else {
        console.log("bad...");
        res.status(400);
    }
});

const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });
