import { Realm, createRealmContext } from '@realm/react';

export class Task {
  constructor({id = new Realm.BSON.ObjectId(), description, isComplete = false}) {
    this.description = description;
    this.isComplete = isComplete;
    this.createdAt = new Date();
    this._id = id;
  }

  // To use a class as a Realm object type, define the object schema on 
  // the static property "schema".
  //
  // also creating a relationship back to the parent project using the linkingObjects
  // which in this case will be an array of one element, which is the parent. It looks
  // weird in the code but in works
  // https://docs.mongodb.com/realm/sdk/react-native/examples/define-a-realm-object-model/#define-relationship-properties
  // https://stackoverflow.com/questions/69711011/is-there-a-way-to-present-one2many-relation-in-correct-way-in-realm
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      isComplete: {type: 'bool', default: false},
      createdAt: 'date',
      project: { type : 'linkingObjects', objectType : 'Project', property: 'tasks' }
    },
  };
}
