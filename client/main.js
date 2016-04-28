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
  resolutions: function(){
    console.log(Resolutions.find({}));
    return Resolutions.find({});
  }
});
