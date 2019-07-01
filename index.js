const jimp = require('jimp');
const fs = require('fs');

// 画像圧縮
const MAX_WIDTH = 975;
const QUALITY = 65;

fs.readdir('src', (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    jimp.read('src/' + file).then((lenna) => {
      lenna
        .resize(Math.min(MAX_WIDTH, lenna.getWidth()), jimp.AUTO)
        .quality(QUALITY)
        .write('dist/' + file);

    }).catch((err) => {
      throw err;
    });
  });
});