@echo off
title GeoNet Sentinel — Localhost Server Launcher
echo ========================================================
echo   Starting GeoNet Sentinel Enterprise Cluster
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/2] Starting API Gateway, Prober Daemon and GPS Fleet Mover...
start "GeoNet Backend API (Port 4000)" cmd /k "node scripts/development/start-all.js"

timeout /t 2 /nobreak >nul

echo [2/2] Starting Frontend Web Client (Port 5173)...
start "GeoNet Web Client (Port 5173)" cmd /k "npm --prefix apps/web run dev"

timeout /t 3 /nobreak >nul

echo.
echo ========================================================
echo   Services are running on localhost!
echo     Frontend Web Application: http://localhost:5173/
echo     Backend API Gateway:      http://localhost:4000/
echo     Cluster Health Check:     http://localhost:4000/api/v1/system/health
echo ========================================================
echo.
pause
