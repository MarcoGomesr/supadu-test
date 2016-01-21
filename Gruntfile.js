/* #############################################################################
 * Title: Gruntfile.js
 * Desc: The grunt build configuration file. 
 * Author: Marco Gomes
 * Date: 14th Nov 2015
 * License: MIT
 * #############################################################################
*/

module.exports = function(grunt) {  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
   
    jade: {
      compile: {
        files: [ {
          expand: true,
          cwd: "src/views",      
          src: "*.jade",
          dest: "build/",      
          ext: ".html"
        } ]
      }
    },


    copy: {
      main: {
        expand: true,
        flatten: true,
        src: ['src/img/**'],
        dest: 'build/img',
        filter: 'isFile'
      },

       assets: {
        expand: true,
        flatten: true,
        cwd: 'src/assets/',
        src: ['*/*'],
        dest: 'build/assets'
      },

      fonts:{
        expand: true,
        flatten: true,
        cwd: 'src/css/fonts/snowcone/',
        src: ['**/**'],        
        dest: 'build/css/fonts/snowcone',
        filter: 'isFile'
      }
    },

    watch: {
      options: {
        livereload: true
      },

       sass: {
          files: ['src/css/**.scss'],
          tasks: ['sass']
        },

        jade:{
          files: ['src/views/*.jade','src/views/_partials/*.jade'],
          tasks: ['jade']          
        }
    },

    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },

        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['style.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['style.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.registerTask('default',['copy', 'jade', 'sass', 'cssmin', 'watch']);
};