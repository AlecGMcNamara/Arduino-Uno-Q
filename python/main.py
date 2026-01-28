from arduino.app_utils import *
from arduino.app_bricks.web_ui import WebUI

counter2=0

def received_message(client, data):
    """Receiving socket message."""
    #print("Received message from browser")
    #print(data)
    global counter2
    counter2 = int(data["S2"])  #get counter2
    counter2 +=1                #increment
    message={
            "S1":data["S1"],    #return message 
            "S2":counter2,      #with updated counter
            "S3":data["S3"],
            "S4":data["S4"],
            "S5":data["S5"],
            "S6":data["S6"],
            "S7":data["S7"],
            "S8":data["S8"],
            "S9":data["S9"],
            "S10":data["S10"]
            }
    ui.send_message('message_from_q', message, client)

# create WebUI

ui = WebUI()

# Handle socket messages (like in Code Scanner example)
ui.on_message('message_from_browser', received_message)

# Start the application
App.run()