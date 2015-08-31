import Ember from 'ember';

export default Ember.Route.extend({

        model: function () {
                return this.store.findAll('project');
        },


        actions: {
                //action to create new project
                newProject: function () {
                        Ember.$('#new-input').attr('class', '');
                       Ember.$('#new-input input').focus();
                },
                setProjectName: function () {
                        var newproject = this.store.createRecord('project', {name: Ember.$('#new-input input').val()});
                        console.log("setProjectName triggered!");
                        newproject.save(); 
                        this.transitionTo('project', newproject.get('id'));
                        Ember.$('#new-input').attr('class', 'hidden');
                },
                destroyProject: function (object) {
                        var confirmation = confirm("Are You sure you want to delete '" + object.get('name') + "'?");
                        if (confirmation === true) {
                            object.destroyRecord();
                        }
                        
                }


        }
});
