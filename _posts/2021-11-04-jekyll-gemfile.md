---
layout: post
title: Setting up jekyll on WSL2
---

Missing gems in jekyll gemfile cause it to not work on WSL2. 

# setting jekyll up to serve

I found out that setting up a jekyll in WSL2 environment has some problems  
To make it work on WSL2, I had to add two lines to Gemfile
`gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]` and 
`gem "webrick", "~> 1.7"`  
Then run `bundle install`  

---

To use jekyll for serving files with live reload I use `jekyll serve --livereload`  
Which I have since added to `package.json` for easy `npm start` script.