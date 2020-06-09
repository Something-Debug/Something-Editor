Citizen.CreateThread(function()
	while true do
		Citizen.Wait(60)
		if IsControlPressed(1, 288) then --288 = F1 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
			StartRecording(1) 
		end
		if IsControlPressed(1, 289) then -- 289 = F2 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
			StopRecordingAndSaveClip()
		end
		if IsControlPressed(1, 170) then -- 170 = F3 if you want to change the keybinds to something else see https://docs.fivem.net/docs/game-references/controls/
			ActivateRockstarEditor() --Activates R* editor
			while IsPauseMenuActive() do --If the pause menu is active do below
				Citizen.Wait(60)
				DoScreenFadeIn(1) --Prevents infinite black loading screen upon exiting R* editor
			end
		end
	end
end)