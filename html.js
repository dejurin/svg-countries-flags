//requiring path and fs modules
const path = require('path');
const fs = require('fs');


//joining path of directory 
const directoryPath = path.join(__dirname, './dist/svg');
let html = '<!DOCTYPE html><html lang="en" dir="ltr"><head><meta charset="utf-8"><title>SVG Countries Flags</title><style>body{margin:1rem}.wrapper{display:grid;grid-template-columns:20% 20% 20% 20% 20%}.box{display:flex;border-radius:.5rem;padding:1rem;text-align:center;justify-items:center;justify-content:center}</style></head><body><div class="wrapper">';

fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function(file) {
        let extension = file.split(".").pop();
        if (extension === 'svg') {
            html += '<div class="box"><img style="width:100%" src="./dist/svg/' + file + '" /></div>';
        }
    });

    html += '</body></html>';

    try {
        fs.writeFileSync('./flags.html', html)
      } catch (err) {
        console.error(err)
      }
});
