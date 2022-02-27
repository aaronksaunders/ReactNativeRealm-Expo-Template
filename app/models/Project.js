import { createRealmContext, Realm } from '@realm/react';
import { Task } from './Task';

export class Project {
  constructor({id = new Realm.BSON.ObjectId(), name}) {
    this.name = name;
    this.createdAt = new Date();
    this._id = id;
    this.tasks = [];
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Project',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      tasks: 'Task[]',
      createdAt: 'date'
    },
  };
}

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Task.schema, Project.schema],
  deleteRealmIfMigrationNeeded: true,
});