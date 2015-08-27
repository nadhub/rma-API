/**
 * Created by nad on 16/05/15.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){

    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 3000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function(){
            console.log('Restarting ... ')
        })
})
