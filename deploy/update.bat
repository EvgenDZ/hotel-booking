@echo off
echo Updating application...

cd /d D:\hotel-booking\
git pull origin main

cd client
call npm install
call npm run build

cd ..\server
call npm install --production

pm2 restart my-app
echo Update completed!
pause