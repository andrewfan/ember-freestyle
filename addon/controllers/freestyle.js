import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Controller.extend({
  emberFreestyle: inject.service(),

  queryParams: ['l', 'n', 'c', 's', 'ss'],

  l: computed.alias('emberFreestyle.showLabels'),
  n: computed.alias('emberFreestyle.showNotes'),
  c: computed.alias('emberFreestyle.showCode'),

  s: computed.alias('emberFreestyle.section'),
  ss: computed.alias('emberFreestyle.subsection')
});
