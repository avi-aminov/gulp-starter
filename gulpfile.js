import gulp from 'gulp';
import browserSync from 'browser-sync';

import { path } from './gulp/config.js';
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';

global.app = {
    g: gulp,
    p: path,
    bs: browserSync
}

function watcher(){
    gulp.watch(app.p.watch.html, html);
    gulp.watch(app.p.watch.scss, scss);
    gulp.watch(app.p.watch.js, js);
}

const dev = gulp.series(reset, scss, js, html, gulp.parallel(watcher, server));

gulp.task('images', images);
gulp.task('dev', dev);