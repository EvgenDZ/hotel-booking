@echo off
echo Starting deployment...

cd /d D:\hotel-booking\client
echo Building React app...
call npm run build

cd /d D:\hotel-booking\server
echo Installing server dependencies...
call npm install --production

echo Restarting application...
pm2 restart hotel-booking

echo Deployment completed!
pause