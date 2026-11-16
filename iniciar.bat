@echo off
title Editora Salme - Site Institucional
echo ========================================================
echo        EDITORA SALME - PLATAFORMA EDITORIAL
echo ========================================================
echo Iniciando servidor de desenvolvimento...
echo Acesse no seu navegador em: http://localhost:5173
echo.
cd /d "%~dp0"
npm run dev
pause
