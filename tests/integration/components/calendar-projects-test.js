import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('calendar-projects', 'Integration | Component | calendar projects', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calendar-projects}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#calendar-projects}}
      template block text
    {{/calendar-projects}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
