import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['FreestyleUsage'],
  emberCli: Ember.inject.service(),
  snippetHbs: computed('snippetName', function() {
    return `${this.get('snippetName')}.hbs`;
  }),
  snippetJs: computed('snippetName', function() {
    return `${this.get('snippetName')}.js`;
  }),
  snippetScss: computed('snippetName', function() {
    return `${this.get('snippetName')}.scss`;
  }),
  positionalParams: ['snippetName'],
  highlightJsTheme: 'zenburn'
});
