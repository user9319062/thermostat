## THERMOSTAT!
=================

This is a thermostat application created entirely in Javascript - the back-end was written first as a TDD project, with the front-end following (without tests, since functionality is relatively minimal). Again, the front-end was written entirely in pure Javascript (no jquery - it's a tiny app!)

![thermostat](http://file.vintageadbrowser.com/y6gls8nnr5eucu.jpg)

I added sound as an experiment based on some late-night research on how web audio works. Obviously from a user's perspective, an app with sound turned on automatically is a big no-no but, since it's essentially a roundabout way of making a silly joke, I think it's justified in this case.

Sounds were recorded and treated using the free open-source Audio application Audacity (http://sourceforge.net/projects/audacity/)

Refactoring to make everything Sinatra-ready was a quick step. The app is deployed to Heroku here: https://polar-basin-3888.herokuapp.com/

# Original Specs:
-----------------

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

- In its current state it fulfils the basic specs above, bar the POST request. The minimum-maximum temperatures need a little work and the web interface doesn't reflect the fact that the main engine has power saving on by default

# To Do:
--------

- Implement a warning for when the maximum temperature is reached (in power saving mode and not), and add appropriate sound effects
- Deal with the POST request
- Write an API
- Hook up to an external API of some sort
- The sounds at the moment only fire consecutively, which means repeatedly hitting the button only fires a new sound occasionally - when the sound has stopped playing. I'm actively researching how to have these sounds overlap