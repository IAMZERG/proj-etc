import Ember from 'ember';

export default Ember.Route.extend({

        model: function () {
                return this.store.find('project');
        },


        actions: {
                //action to create new project
                newProject: function () {
                        $('#new-input').attr('class', '');
                       $('#new-input input').focus();
                },
                setProjectName: function () {
                        var newproject = this.store.createRecord('project', {name: $('#new-input input').val()});
                        console.log("setProjectName triggered!");
                        newproject.save(); 
                        this.transitionTo('project', newproject.get('id'));
                        $('#new-input').attr('class', 'hidden');
                },
                destroyProject: function (object) {
                        var confirmation = confirm("Are You sure you want to delete '" + object.get('name') + "'?");
                        if (confirmation === true) {
                            object.destroyRecord();
                        }
                        
                }


        }
                 //action to create new work-hour and transition to that route
                 //
                 //action to handle click on button in jumbotron
                 //
});
