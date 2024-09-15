@echo off
dotnet restore
dotnet tool install --global dotnet-ef
dotnet ef database update

start "" dotnet run --launch-profile https
timeout /t 5
