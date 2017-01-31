import fs from 'fs';
import path from 'path';

export default class StaticDispatcher {
    static sendIndex(req, res) {
      var _root = process.cwd();

      res.type('.html');

      fs.createReadStream(path.join(_root, '/client/dist/index.html'))
        .pipe(res);
    }
}
