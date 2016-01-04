module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            dist: {
                tsconfig: true
            }
        },
        copy: {
            dist: {
                files: [
                    {cwd: "src/css", src: ["**/*.css"], dest: "dist/css/", expand: true},
                    {cwd: "src/html", src: ["**/*.html"], dest: "dist/html/", expand: true},
                    {cwd: "src/icons", src: ["**/*.png"], dest: "dist/icons/", expand: true},
                    {src: "manifest.json", dest: "dist/"}
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("dist", ["ts", "copy"]);
};