@echo off
start "" dotnet run --launch-profile https
timeout /t 5
start "" http://localhost:5173/
