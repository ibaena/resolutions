//IMPORTS
import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';
import './main.html';

//CREATES MONGO COLLECTION resolutions
Resolutions = new Mongo.Collection('resolutions');

Template.body.helpers({
  resolutions: function() {
    return Resolutions.find({});
  }
});

Template.body.events({
  "submit .new-resolution": function(event) {
    var title = event.target.title.value;

    Resolutions.insert({
      title: title,
      createdAt: new Date()
    });
    event.target.title.value = "";

    return false;
  }
});
Template.resolution.events({
  "click .delete": function() {
    Resolutions.remove(this._id);
  },
  "click .toggle-checked": function() {
    Resolutions.update(this._id, {
      $set: {
        checked: !this.checked
      }
    });
  }
});
