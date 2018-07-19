"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const aws_sdk_1 = require("aws-sdk");
class DB {
    constructor(table) {
        this.creds = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_DEFAULT_REGION
        };
        this.library = new aws_sdk_1.DynamoDB.DocumentClient(this.creds);
        this.table = table;
    }
    Search(params) {
        let queryOptions = Object({
            ExpressionAttributeValues: params.values,
            FilterExpression: params.query,
            TableName: this.table
        });
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
exports.DB = DB;
//# sourceMappingURL=DB.js.map