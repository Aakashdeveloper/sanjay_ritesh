var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');


var config = {
    port:3600,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./src/*.html',
        js:'./src/**/*.js',
        images:'./src/images/*',
        dist:'./dist',
        mainJs:'./src/main.js',
        css:[
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ]
    }
}

gulp.task('connect',function(){
    connect.server({
        root:['dist'],
        port:config.port,
        base: config.devBaseUrl,
        livereload:true
    });
});

gulp.task('open',['connect'],function() {
    gulp.src('dist/index.html')
        .pipe(open({uri:config.devBaseUrl+":"+ config.port+'/'}));
});

gulp.task('default',['open']);