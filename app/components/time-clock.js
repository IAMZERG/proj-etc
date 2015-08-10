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

       tick: function() {
               var interval= 1000;
               Ember.run.later(this, function () {
                       if( this.get('started') ) {
                               var time = this.get('totalTime');
                               this.set('totalTime', time+1);
                               this.notifyPropertyChange('currentTime');
                               this.notifyPropertyChange('totalTime');
                               this.notifyPropertyChange('totalMinutes');
                               this.notifyPropertyChange('totalHours');
                                 
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
                       this.set('started', false);
               },
              setDisplay: function () {
                      var selectval = Ember.$('select').val();
                      this.set('display', selectval);
              }

       }  

});
