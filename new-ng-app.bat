@echo off
ng new %1
npm install --save-dev @types/jasmine
atom "%1"
cd "%1"
start cmd /c ng serve
start cmd /c ng test
