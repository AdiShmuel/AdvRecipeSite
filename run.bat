@echo off
@echo *** Start mongo db server ***
rem #mkdir Data
"%MongoDB%\bin\mongod.exe" --dbpath "%~dp0\Data"



rem #timeout 5
rem #@echo *** Start node server ***
rem #start cmd /k node server\server.js

rem #timeout 5
rem #start chrome.exe "http://localhost:8080"

@PAUSE 