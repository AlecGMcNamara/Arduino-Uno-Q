### Minimum code to demonstrate websockets working in Uno Q

Copy files into a new project and add WebUI HTML brick!

This is my first time posting a UNO Q project, all comments
and help welcome, thanks.

**29/01/26**

Bit more code removal

**28/01/26**

Added two counters, 1 incremented by the browser and 1
incremented by the Uno Q. 

Both counters and other 8 datas
are copied back and forth using websocket.

Tested with interval of 100ms between messages. 
in SBC mode using UnoQ Chrome

browser and iPad Chrome browser at the same time.

**27/01/26**

Send message every 3 seconds from Browser to Q

on message received, send message back from Q to Browser

Logged message contents to browser debug screens

Stripped all old code from App, blank screen with Websocket working.

**26/01/26**

Added print statements to main.py for debugging

Added console.log functions to debug app.js code

Use Ctrl + Shift + i to start debug tools in Chrome

Added setInterval function to send message every 3 seconds

