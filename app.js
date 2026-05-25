const express = require("express");


module.exports = (function() {
let interval = 6, min = 0, max = 100, serverNum;

const api = express.Router();
function genRandom(min, max){
    return Math.floor(Math.random() * max) + min;
}

setInterval(function () {
    serverNum=genRandom(min,max)
    // console.log(serverNum);
}, 6000);

api.get("/Numbers/", (req, res) => {
    res.json({ random: serverNum});
});

return api;
})();