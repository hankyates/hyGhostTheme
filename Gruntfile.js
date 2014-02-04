module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          cleanTargetDir: false,
          cleanBowerDir: false,
          targetDir: 'assets/lib'
        }
      }
    },

    less: {
      development: {
        files: [
          {
            expand: true,
            cwd: 'src/styles/',
            src: ['main.less'],
            dest: 'assets/css/',
            ext: '.css'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-less');

}
