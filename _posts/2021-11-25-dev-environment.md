---
layout: post
title: How I found myself conquering the dev environment
---

I entered frontend development landscape ~13 years ago.
And in all of these years, of working within the frontend ecosystem , I kept wishing for some tools to ease the **Pain** of working the same problems _again_ and **_again_**.  

And don't get me wrong, there were tools. And the tools kept getting better and better. But the fundamental problems have stayed the same. They just might get mitigated faster and easier.  

# Starting a project & it's problems

Starting a new project was an irritating pain in the brain - 🤯😖😵😬. Having to do all:

- create files
- write boilerplate code
- setup configs
- set up development servers  
  - static file server
  - dynamic file server
  - database
- set up local development server
  - static file server
- set up version control on your project files
- set up file upload to development servers

It took time to set all this up. Configure all your servers, create initial files & get it all working together.

## Enter the era of build tools, install tools, pre-compilers, builders, linters...

Nowadays we can all do these things on the command line with tools for installation of packages, libraries, frameworks and boilerplate such as:
- [npm](https://nodejs.org/) ---gets installed with node.js, needed for most tools
- [yarn](https://yarnpkg.com/) --- package manager / installer
- [bower](https://bower.io/) --- package manager for frontend libraries & frameworks
- ...  

Tools for running a local development server with pre-build & build scripts such as:
- [Grunt](https://gruntjs.com/) --- task workflow automation - configuration files
- [Gulp](https://gulpjs.com/) --- task workflow automation - code over configuration
- [Webpack](https://webpack.js.org/) --- build tool / bundler for all file assets
- [Parcel](https://parceljs.org/) --- zero configuration build tool / bundler for HTML, CSS, javascript, ...
- [Esbuild](https://esbuild.github.io/) --- extremely fast javascript bundler
- ...  

Tools for compiling your language files
- [Babel](https://babeljs.io/) --- javascript compiler
- [Sass](https://sass-lang.com/) --- css language extension

### These tools might ease your time setting up a project, but...

You have to learn how to use these tools, select the correct ones for the job. And hope there's a github repo with your current edge case config files, if you step out of bounds of the defaults.  

Reading documentation that's almost certainly out of date for can be as frustrating as getting the whole project up & done by hand.

# There is another way

During the process of getting up to date, I've noticed that my favorite code editor was capable of many of the things I was using an external tool for.  

Be it for bundling bundling scripts, building from source code or running a development server.

VS Code had it all withing it's extensions and configuration settings.

## My code editor and me and some extensions...

I still use npm/npx or yarn to initialize my projects. That is still the easiest way to make some boilerplate ex.:
- .gitignore
- package.json
- directory file tree
  - src
    - assets
      - images
      - javascript
      - css
  - build
  - test
  - public
  
But if the project I'm using is not too demanding, I do the steps myself instead of using an installer/boilerplate project.

```sh
me@pc:~/project/$ git init
me@pc:~/project/$ npm init
```  
And I manually fill the `package.json`, `.git/config` and `.gitignore` files.

Now I usually like to use `scss` for writing `css`. And my buddy VS Code has a Sass extension. It also has `typescript` transpiler available as an extension. So there goes away, much of the need for project running build tools already.

But I still need a development server, VS Code's got a live server extension as well. So now I can use my sass extension to watch my `scss` files and compile them to `css`.  
My live server extension provides me with a website of my code, running with live reload, so whenever I edit a file I see the change in the webpage instantly.  

The boilerplate code for my files are taken care of with VS Code snippets.  

And my basic needs for setting up a new project have gone down to seconds, instead of a larger amount of time, I used to spend setting up a project through `Grunt, Gulp, Webpack, Parcel, Esbuild`.  


Though there is always an option to upgrade my project to use these automation tools. After all the whole frontend/backend development environment has been somewhat standardized around nodejs and it's client side terminal tools.








