@echo off
setlocal EnableDelayedExpansion
set /p JSON=<scripts\mcp.json
"C:\Users\danis\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd" --add-mcp "%JSON%"
echo code exit: %ERRORLEVEL%
endlocal
exit /b %ERRORLEVEL%
