const jimp = require('jimp');

// 画像圧縮
const MAX_WIDTH = 975;
const QUALITY = 60;
jimp.read('src/sample.jpg').then((lenna) => {
  lenna
    .resize(Math.min(MAX_WIDTH, lenna.getWidth()), jimp.AUTO)
    .quality(QUALITY)
    .write("src/sample-min.jpg");

}).catch((err) => {
  throw err;
});