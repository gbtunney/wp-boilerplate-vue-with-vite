import { globSync } from 'glob'
import fs from 'fs'
// For entry file selection
/*const _result = globSync(_value)
    .forEach((_path: string): FilePath | undefined => {
       // return getFilePathObj(_path)
        console.log("path",path)
    })*/
//    .filter((_result) => _result !== undefined)
/*
globSync("wp-plugin-with-vue-tailwind.php", function(err, files) {
        files.forEach(function(item, index, array) {
        const data = fs.readFileSync(item, 'utf8');
        const mapObj = {
           WPM_PRODUCTION : "WPM_DEVELOPMENT"
        };
        var result = data.replace(/WPM_PRODUCTION/gi, function(matched){
            return mapObj[matched];
        });
        fs.writeFile(item, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
        console.log('✅  Production asset enqueued!');
    });
});*/
