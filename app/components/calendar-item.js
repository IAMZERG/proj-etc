import Ember from 'ember';

export default Ember.Component.extend({
        displayedProjects: function () {
                return projects.filter(function(project) {
                        return project.dueDate === day;
                });
        }
});
