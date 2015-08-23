import Ember from 'ember';

export default Ember.Route.extend({
        model: function () {
                return this.store.findAll('project');
        },
       filteredResults: function () {
               return this.get('model').filter(function (item) {
                        var endWeek = moment().endOf('week');
                        var startWeek = moment().startOf('week');
                        console.log(startWeek, endWeek);
                        if (item.dueDate < endWeek) {
                                return true;
                        } else {
                                return false;
                        }
                }, this.get('model'));
       }.property('model'),

       actions: {
               checked: function (checkedname) {
                       console.log("checked action called!" + checkedname);
                       var name = $("input[name='"+checkedname+"']").attr('name');
                       console.log(name);
                       $("input[name='"+checkedname+"']").attr('checked', false);
                       
               },
               showfiltered: function () {
                       console.log(this.get('filteredResults'));
               }
       }


});
