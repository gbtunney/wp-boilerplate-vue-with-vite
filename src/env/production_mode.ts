import { globSync } from 'glob'
import fs from 'fs'
import { node } from '@snailicide/g-library'
type FilePathObj = ReturnType<typeof node.getFilePathObj>
// For entry file selection
const filename = 'wp-plugin-with-vue-tailwind.php'
/*const _result :FilePathObj[]= node.getFilePathArr(filename)
_result.forEach( ( _arr:FilePathObj) => {
    // return getFilePathObj(_path)
    console.log("path",_arr)
})*/
// For entry file selection
/*
glob("wp-plugin-with-vue-tailwind.php", function(err, files) {
        files.forEach(function(item, index, array) {
        var data = fs.readFileSync(item, 'utf8');
        var mapObj = {
            WPM_DEVELOPMENT : "WPM_PRODUCTION"
        };
        var result = data.replace(/WPM_DEVELOPMENT/gi, function(matched){
            return mapObj[matched];
        });
        fs.writeFile(item, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
        console.log('✅  Development asset enqueued!');
    });
}); */

export {}
