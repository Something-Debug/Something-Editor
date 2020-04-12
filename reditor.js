function wait() {
    do {
        DoScreenFadeIn(1); 
        NetworkSessionHost(-1, 32, false); //Attempts reconnection to the session after exiting the editor
    }
    while(IsPauseMenuActive()); //If the pause menu is active do above
}

setTick(() => {
    if(IsControlPressed(1, 288)) { //F1 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
        StartRecording(1);
    }
    if(IsControlPressed(1, 289)) { //F2 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
        StopRecordingAndSaveClip();
    }
    if(IsControlPressed(1, 170)) { //F3 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
        NetworkSessionEnd(true, true); //End the current session (required if you want R* editor to work) 
        ActivateRockstarEditor(); //Activates R* editor
        setTimeout(wait, 1); //Calls wait function and waits one millisecond 
    }
});