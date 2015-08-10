import Ember from 'ember';

export default Ember.Controller.extend({
        actions: {
                save: function () {
                        var totaltime = this.model.get('totalTime');
                        this.model.save();
                        console.log('save action on project route called');
                        this.transitionToRoute('projects');
                }
        }
});
