import Ember from 'ember';

export default Ember.Controller.extend({

	emailContact: '',

	emailValid: Ember.computed.match('emailContact', /^.+@.+\..+$/),

	messageValid: Ember.computed.gte('userMessage.length', 5),

	isValid: Ember.computed.and('emailValid', 'messageValid'),


	actions : {
		sendContact() {
			alert(`The message has been sent from ${this.get('emailContact')}: ${this.get('userMessage')}`);
			this.set('emailContact', '');
			this.set('userMessage', '');
			this.set('messageSend', 'Thank you! We’ll get in touch :)');
		}
	}



});
