import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//MONGO CONNECTION


Meteor.startup(() => {
  // code to run on server at startup
  Resolutions = new Mongo.Collection('resolutions');
});
