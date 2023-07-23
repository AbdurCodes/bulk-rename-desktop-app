const fs = require('fs');
const path = require('path');
const folder = __dirname;

const replaceThis = "Infinity";
const replaceWith = "Nothing-ness";
const preview = false;

try {
    fs.readdir(folder, (err, files)=>{
        console.log(files);
        for (let index = 0; index < files.length; index++) {
            const item = files[index];
            let oldFileName = path.join(folder, item);
            let newFileName = path.join(folder, item.replaceAll(replaceThis, replaceWith));
            if (!preview) {
              fs.rename(oldFileName, newFileName, ()=>{
                  console.log("Re-named Successfully.");
              });
            }
            else {
              if (oldFileName != newFileName) console.log(`${oldFileName} will be renamed to ${newFileName}`);
            }
}});
                   

} catch (err) {
  console.error(err);
}
