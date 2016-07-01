@echo *** Start mongo db server ***
#mkdir Data
%MongoDB%\bin\mongod.exe --dbpath "Data"



#timeout 5
#@echo *** Start node server ***
#start cmd /k node server\server.js

#timeout 5
#start chrome.exe "http://localhost:8080"

@PAUSE