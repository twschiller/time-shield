"use strict";

var path = require("path");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        manifest: grunt.file.readJSON("src/manifest.json"),
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
        webpack: {
            default: {
                entry: {
                    options: "./src/js/Options.ts",
                    background: "./src/js/Background.ts"
                },
                output: {
                    path: path.join(__dirname, "dist", "js"),
                    filename: "[name].bundle.js"
                },
                resolve: {
                    // https://github.com/TypeStrong/ts-loader
                    // needed to resolve the typescript files during the compile
                    extensions: ["", ".ts", ".tsx"],
                    modulesDirectories: ["node_modules"]
                },
                module: {
                    loaders: [
                        {
                            test: /\.tsx?$/,
                            loaders: ["babel", "ts"],
                            include: "./src"
                        }
                    ]
                }
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

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-crx");
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask("build", ["webpack", "copy"]);
    grunt.registerTask("package", ["build", "crx"]);
};
