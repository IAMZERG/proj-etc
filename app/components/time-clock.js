import Ember from 'ember';

export default Ember.Component.extend({
       started: false,
       display: "seconds",
       seconds: function () {
               if(this.get('display')==="seconds") {
                       return true;
               } else {
                       return false;
               }
       }.property('display'),
       minutes: function () {
               if(this.get('display')==="minutes") {
                       return true;
               } else {
                       return false;
               }
       }.property('display'),
       hours: function () {
               if(this.get('display')==="hours") {
                       return true;
               } else {
                       return false;
               }
       }.property('display'),

       totalSeconds: 0,
       description: 'something nice I am working on',
       alarmTime: null,
       alarmSeconds: 0,
       totalMinutes: function () {
      
               return parseInt(this.get('totalTime')/60);
       }.property('totalTime'),
       totalHours: function () {
               return parseInt(this.get('totalTime')/60/60);
       }.property('totalTime'),
       currentTime: function () {
               var date = new Date();
               return date.toString();
       }.property('tick'),
       alarm: function () {
               if (this.get('alarmTime')) {
                       console.log(this.get('alarmTime') <= this.get('alarmSeconds')/60);
                       return this.get('alarmTime') <= this.get('alarmSeconds')/60;
               } else {
                       return false;
               }
       }.property('totalTime'),


       tick: function() {
               var interval= 1000;
               Ember.run.later(this, function () {
                       if( this.get('started') ) {
                               this.incrementProperty('totalTime');
                               this.incrementProperty('alarmSeconds');
                               this.notifyPropertyChange('currentTime');
                               this.notifyPropertyChange('totalTime');
                               this.notifyPropertyChange('totalMinutes');
                               this.notifyPropertyChange('totalHours');

                               if (this.get('alarm')) {
                                       Ember.$("#gong").trigger('play');
                               }
                                 
                               this.tick();
                       }
               }, interval);
       }.on('start'),
       actions: {
              startClock: function (date) {
                       if (!this.get('startTime')) {
                               this.set('startTime', new Date());
                       }
                       if( this.get('started') === false) {
                               this.tick();
                       }
                       this.set('started', true);
              },
              stopClock: function (model) {
                       this.set('stopTime', new Date());
                       this.set('alarmSeconds', 0);
                       this.set('started', false);
                       $('#gong').trigger('pause').prop('currentTime', 0);
                       this.sendAction('savemodel');
               },
              setDisplay: function () {
                      var selectval = Ember.$('select').val();
                      this.set('display', selectval);
              },
              setAlarm: function (minutes) {
                      if (!minutes) {
                              console.log(minutes);
                              minutes = prompt("Set an alarm for how many minutes?");
                      }
                      console.log(typeof(parseInt(minutes)));
                      this.set('alarmTime', parseInt(minutes) );
                      this.send('startClock');
              }
       }  

});
