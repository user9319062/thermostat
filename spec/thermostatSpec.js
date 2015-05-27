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

    // it('raises an error when reaching maximum temp', function(){

    //   thermostat.temperature = 26
    //   expect(thermostat.increase()).toEqual('Too high!')
    // })

    describe('power saving mode', function(){

      it('is on by default', function(){

        expect(thermostat.isPowerSaving).toBe(true);

      });

      it('raises an error when reaching maximum temp', function(){

        thermostat.temperature = 26
        expect(thermostat.increase()).toEqual('Too high!')

      });

    });

  });

});
