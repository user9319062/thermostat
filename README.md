Creating a web-based thermostat written in JavaScript, with the following specs:
--------

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting the reset button
- The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
- After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

- The engine has been written in Javascript, and transferred to the web without using jquery for the moment, in order to practice writing JS functions (a new quasi-'helper' function is required for each button and interaction which something like jquery would help with)
- In its current state it fulfils the basic specs above, bar the POST request. The minimum-maximum temperatures need a little work and the web interface doesn't reflect the fact that the main engine hass power saving on by default