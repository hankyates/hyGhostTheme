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
    }

  });

  grunt.loadNpmTasks('grunt-bower-task');

}
