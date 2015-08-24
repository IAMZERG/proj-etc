import Ember from 'ember';

export default Ember.Component.extend({
        today: function () {
                return moment();
        },
       endWeek: function () {
               return moment().endOf('week');
       },
       startWeek: function () {
               return moment().startOf('week');
       },
       week: function () {
               console.log(moment());
               return [
       moment().startOf('week'),
       moment().startOf('week').add(1, 'days'),
       moment().startOf('week').add(2, 'days'),
       moment().startOf('week').add(3, 'days'),
       moment().startOf('week').add(4, 'days'),
       moment().startOf('week').add(5, 'days'),
       moment().startOf('week').add(6, 'days')

               ];
       }.property('endWeek'),
       filteredModel: function () {
               var modelfiltered = [];
               modelfiltered = this.get('week').forEach(function(item, index) {
                       modelfiltered.push([]);
                       this.get('model').forEach(function(modelItem) {

                               if(modelItem.get('dueDate') === item) {
                                       modelfiltered[index].push(modelItem);
                               }

                       });

               });
               return modelfiltered;
       }.property('week'),

       didInsertElement: function() {
               var outerscope = this; 
               this.get('week').forEach(function(day, index) {
                       console.log(index);
                       outerscope.get('model').forEach(function(project) {
                               if(project.get('dueDate').toString() === day._d.toString()) {
                                       $("."+index+".day").append("<li>"+project.get('name')+"</li>");
                               }
                               var today = new Date().getDay();
                               $("."+today).addClass("day-active");
                       });
               });
       }
});
