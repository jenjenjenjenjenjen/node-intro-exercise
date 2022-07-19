const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log("ERROR!!!!!!", err);
            process.kill(1);
        }
        console.log(data)
    })
};

async function webCat(url) {
    try {
        const file = await axios.get(url);
        console.log(file.data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}