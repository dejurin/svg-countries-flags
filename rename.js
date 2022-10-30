//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const {
    countryToAlpha2
} = require('country-to-iso');

function strstr(haystack, needle, bool) {
    var pos = 0;

    haystack += "";
    pos = haystack.indexOf(needle);
    if (pos == -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

function makeTitle(slug) {
    var words = slug.split('-');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}

//joining path of directory 
const directoryPath = path.join(__dirname, './src/countries-flags--82/svg');

const unnamed = {
    "abkhazia--4738": "ge-ab",
    "azores-islands--4929": "pt-20",
    "balearic-islands--4792": "es-ib",
    "basque--4783": "es-pv",
    "bonaire--4762": "bq",
    "british-columbia--4812": "ca-bc",
    "canary-islands--4744": "es-cn",
    "ceuta--4709": "es-ce",
    "cocos-island--4713": "cc",
    "european-union--4948": "eu",
    "galapagos-islands--4860": "ec-w",
    "hawaii--4951": "us-hi",
    "kosovo--4742": "xk",
    "kwait--4797": "kw",
    "madeira--4837": "pt-30",
    "malasya--4808": "my",
    "marshall-island--4793": "mh",
    "melilla--4886": "ea",
    "nato--4943": "nato",
    "northern-cyprus--4791": "cy",
    "northern-marianas-islands--4849": "us-mp",
    "sao-tome-and-prince--4702": "st",
    "sardinia--4946": "it-88",
    "sicily--4819": "it-82",
    "sint-eustatius--4939": "bq",
    "somaliland--4936": "so",
    "st-lucia--4861": "lc",
    "st-vincent-and-the-grenadines--4930": "vc",
    "sahrawi-arab-democratic-republic--4892": "eh",
    "turks-and-caicos--4912": "tc",
    "united-nations--4772": "un",
    "uzbekistn--4879": "uz",
    "virgin-islands--4906": "vi",
    "transnistria--4922": "transnistria",
    "st-barts--4769": "st-barts",
    "tibet--4831": "tibet",
    "ossetia--4818": "ossetia",
    "rapa-nui--4864": "rapa-nui",
    "corsica--4721": "corsica",
    "saba-island--4751": "saba-island",
}

fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function(file) {
        let iso2 = '';
        try {
            const countryName = makeTitle(strstr(file, '--', true));
            iso2 = countryToAlpha2(countryName);
        } catch {
            iso2 = false;
        }

        let renameFile = null;

        if (iso2) {
            //
            fs.rename(
                directoryPath + '/' + file,
                directoryPath + '/' + iso2.toLowerCase() + '.svg',
                function(err) {
                    if (err) console.log('ERROR: ' + err);
                }
            );
            renameFile = iso2.toLowerCase() + '.svg'
        } else {
            const newName = unnamed[strstr(file, '.svg', true)];
            if (newName) {
                fs.rename(
                    directoryPath + '/' + file,
                    directoryPath + '/' + newName + '.svg',
                    function(err) {
                        if (err) console.log('ERROR: ' + err);
                    }
                );
                renameFile = newName + '.svg'
            }
        }
        if (renameFile) {
            console.log('Rename: ' + file + ' to ' + renameFile);
        }
    });
});