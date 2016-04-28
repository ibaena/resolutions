import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//MONGO CONNECTION


Meteor.startup(() => {
  // code to run on server at startup
  Resolutions = new Mongo.Collection('resolutions');

  Meteor.methods({
    addResolution: function(title){
      Resolutions.insert({
        title: title,
        createdAt: new Date()
      });
    },
    deleteResolution: function(id){
        Resolutions.remove(id);
    },
    updateResolution: function(id, checked){
      Resolutions.update(id, {
        $set: {
          checked: checked
        }
      });
    }
  });


});
