import morgan from 'morgan';
import bodyParser from 'body-parser';
import contentLength from 'express-content-length-validator';
import helmet from 'helmet';
import express from 'express';
import path from 'path';
import compression from 'compression';
import zlib from 'zlib';

export default class RouteConfig {
    static init(application) {
        let _root = process.cwd();
        let _nodeModules = '/node_modules/';
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        
        application.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: '1kb'
        }));

        application.use(express.static(path.join(_root, _nodeModules)));
        application.use(express.static(path.join(_root, _clientFiles)));
        application.use(bodyParser.json());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
