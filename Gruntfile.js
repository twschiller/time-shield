module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        manifest: grunt.file.readJSON("src/manifest.json"),
        ts: {
            dist: {
                tsconfig: true
            }
        },
        copy: {
            dist: {
                files: [
                    {cwd: "src/", src: "manifest.json", dest: "dist/", expand: true},
                    {cwd: "src/css", src: ["**/*.css"], dest: "dist/css/", expand: true},
                    {cwd: "src/html", src: ["**/*.html"], dest: "dist/html/", expand: true},
                    {cwd: "src/icons", src: ["**/*.png"], dest: "dist/icons/", expand: true}
                ]
            }
        },
        crx: {
            default: {
                src: "dist/**/*",
                dest: "crx/",
                zipDest: "crx/",
                options: {
                    privateKey: process.env.KEY
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-crx");

    grunt.registerTask("build", ["ts", "copy"]);
    grunt.registerTask("package", ["build", "crx"]);
};
