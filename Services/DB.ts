import * as _ from 'lodash';
import {DynamoDB} from 'aws-sdk';
import * as IDB from '../Models/IDB';

export class DB {

  private creds: object = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
  }
  private library = new DynamoDB.DocumentClient(this.creds);
  private table: string;

  constructor(table: string) {

    this.table = table;

  }

  Search(params: IDB.QueryParams): Promise<object> {

    let queryOptions = Object({
      ExpressionAttributeValues: params.values,
      FilterExpression: params.query,
      TableName: this.table
    })

    if (_.isString(params.returnFields)) {

      queryOptions.ProjectionExpression = params.returnFields;

    }

    return new Promise((resolve, reject) => {

      this.library.scan(queryOptions, (err, res) => {

        if (!_.isNull(err)) {

          return reject(err);

        }

        return resolve(res.Items);

      });

    });

  }

}