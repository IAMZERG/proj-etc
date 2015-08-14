import Ember from 'ember';

export default Ember.Component.extend({
       isEditing: false,
       actions: {
               saveDesc: function () {
                       console.log("saveDesc called");
                       this.set('isEditing', false);
                       var desc = this.get('description');
                       console.log(desc);
                       this.sendAction('savemodel');
               },
               editDesc: function () {
                       this.set('isEditing', true);
               },
       }
});

