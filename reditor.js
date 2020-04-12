setTick(() => {
    if(IsControlPressed(1, 288)) {
        StartRecording(1);
    }
    if(IsControlPressed(1, 289)) {
        StopRecordingAndSaveClip();
    }
    if(IsControlPressed(1, 170)) {
        NetworkSessionEnd(true, true);
        ActivateRockstarEditor();
        setTimeout(wait, 1);
    }
});

function wait() {
    do {
        DoScreenFadeIn(1);
        NetworkSessionHost(-1, 32, false);
    }
    while(IsPauseMenuActive());
}