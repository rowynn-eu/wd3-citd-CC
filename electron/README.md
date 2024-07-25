# HOW TO BUILD?!?

Install [Node.js](https://nodejs.org/en) and [NPM](https://github.com/nvm-sh/nvm)

1. clone repo
2. open this folder (*/electron) in terminal
3. run `npm init -y`
4. run `install electron --save-dev`
5. run `npm start`

if it works? great!
if it doesn't! i dunno man

to build run:
``npx electron-packager . <name? --platform=<platform> --arch=x64 --out=dist/ --overwrite --icon=assets/icon.ico``

`win32` = windows
`darwin` = mac
`linux` = linux
alternatively download any of the releases
