import DS from 'ember-data';

export default DS.Model.extend({
       startTime: DS.attr('date'),
       stopTime: DS.attr('date'),
       totalTime: DS.attr('number', {defaultValue: 0}),
       name: DS.attr('string'),
       description: DS.attr('string'),
       totalHours: function () {
               return this.get('totalTime')/60/60;
       }.property('totalTime'),
       dueDate: DS.attr('date'),
       dueFromNow: function () {
               return moment(this.get('dueDate')).fromNow();
       }.property('dueDate')
       
  
});
