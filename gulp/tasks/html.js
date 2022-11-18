import fileinclude from "gulp-file-include";

export const html = ()=> {
    return app.g.src(app.p.src.html)
        .pipe(fileinclude())
        .pipe(app.g.dest(app.p.build.html));
}