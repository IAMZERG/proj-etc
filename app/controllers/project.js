import Ember from 'ember';

export default Ember.Controller.extend({
        actions: {
                save: function () {
                        this.model.save();
                        console.log(this.model);
                        console.log('save action on project controller called');
                }
        }
});
