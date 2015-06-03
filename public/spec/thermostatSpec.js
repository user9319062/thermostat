describe('Thermostat', function() {

  var thermostat = new Thermostat();

  describe('showing the initial temperature', function(){

    it('shows the initial temperature', function() {

      expect(thermostat.temperature).toEqual(20);

    });

  });

  describe('control temperature', function(){

    it('can increase temperature', function(){

    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);

    });

    it('can reduce temperature', function(){

      thermostat.decrease();
      expect(thermostat.temperature).toEqual(20);

    });

    it('raises an error when reaching minimum temp', function(){

      thermostat.temperature = 9;
      expect(thermostat.decrease()).toEqual('Too low!');

    });

    describe('power saving mode', function(){

      it('is on by default', function(){

        expect(thermostat.isPowerSaving).toBe(true);

      });

      it('raises an error when reaching maximum temp', function(){

        thermostat.temperature = 26;
        expect(thermostat.increase()).toEqual('Too high!');

      });

    });

    it('raises an error when reaching maximum temp', function(){

      thermostat.isPowerSaving = false;
      thermostat.temperature = 33;
      expect(thermostat.increase()).toEqual('Too high!')
    });

  });

  describe('the reset button', function(){

    it('resets the temperature when pressed', function(){

      thermostat.increase();
      thermostat.increase();
      thermostat.increase();

      thermostat.resetTemperature();

      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('the colour display', function(){

    it('displays yellow by default', function(){

      thermostat.temperature = 20;
      expect(thermostat.colourify()).toEqual('Yellow');
    });

    it('displays green when the temperature is under 18', function(){

      thermostat.temperature = 16;
      expect(thermostat.colourify()).toEqual('Green');
    });

    it('displays red when the temperature is over 25', function(){

      thermostat.temperature = 27;
      expect(thermostat.colourify()).toEqual('Red');
    });

  });

});
