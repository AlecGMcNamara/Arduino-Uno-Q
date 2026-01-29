// *** Use Ctrl + Shift + i to start debug tools in Chrome ***

var counter1 = 0;
var counter2 = 0;

const socket = io();
setInterval(handleSendMessage, 1000);

socket.on('message_from_q', (message) => {
        document.getElementById("S1").innerHTML = message["S1"];
        document.getElementById("S2").innerHTML = message["S2"];
        document.getElementById("S3").innerHTML = message["S3"];
        document.getElementById("S4").innerHTML = message["S4"];
        document.getElementById("S5").innerHTML = message["S5"];
        document.getElementById("S6").innerHTML = message["S6"];
        document.getElementById("S7").innerHTML = message["S7"];
        document.getElementById("S8").innerHTML = message["S8"];
        document.getElementById("S9").innerHTML = message["S9"];
        document.getElementById("S10").innerHTML = message["S10"];
        counter1 = message["S1"]; //save counters
        counter2 = message["S2"];
     });

function handleSendMessage() {
        counter1 +=1;  // increment counter1 on browser side
        var message = {"S1": counter1,
                        "S2": counter2,
                        "S3": "30",
                        "S4": "40",                    
                        "S5": "50",
                        "S6": "60",
                        "S7": "70",
                        "S8": "80",
                        "S9": "90",
                        "S10": "100"
                      };
        socket.emit('message_from_browser', message);
        }