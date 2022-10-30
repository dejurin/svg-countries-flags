//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const xmlParse = require("xml-parse");

const directoryPath = path.join(__dirname, './dist/svg');

fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function(file) {
        const xmlString = fs.readFileSync(directoryPath + '/' + file, 'utf8');
        var parsedXML = xmlParse.parse(xmlString);

        if (parsedXML[0].innerXML) {
            try {
                fs.writeFileSync(
                    directoryPath + '/' + file,
                    '<svg viewBox="0 88.30000305175781 512 335.4000244140625" xmlns="http://www.w3.org/2000/svg">' + parsedXML[0].innerXML + '</svg>'
                )
                console.log('Resize: ' + file)
                //file written successfully
            } catch (err) {
                console.error(err)
            }
        }
    });
});