@echo off

call npm uninstall ts-devutils
call npm uninstall typescript
call npm uninstall axios

call npm i typescript@latest --save-dev
call npm i axios
call npm i github:josedinizdev/ts-devutils
