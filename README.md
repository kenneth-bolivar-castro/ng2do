# Angular2 Quick (ng2quick)

## Description
Based on Angular2 official documentation [online](https://angular.io/docs/ts/latest/quickstart.html), this repository provides a
simple bash script named: "build.sh" to build a typical "Hello World" application using Angular2 framework.
It will be a very good start point or quick start to develop with Angular2.

## Warning
Based on documentation we should have installed node and rpm.
Since it provides a bash script it expected a Linux Debian distribution or even an OS X to run it.
Also it provides a default ".gitignore" file, please double check and modify it based on what you need.

## Usage
1: Clone repository:
```
git clone git@github.com:kenneth-bolivar-castro/ng2quick.git
```
2: Go inside new repository folder (It should be: "ng2quick") and execute script file:
```
cd ng2quick && ./build.sh
```

## Alternative
If anyhow bash script fails, you could do it manually and execute the following instruction:
```
npm install && npm start
```
It should be good enough.

Optionally you could optional remove current .git folder to create your own project:
```
rm -Rf .git
```

## Remove build.sh script
Last but not least, we would like to remove build.sh script file in order to get a clear installation.
```
rm -f build.sh
```
# Angular2 Projet
