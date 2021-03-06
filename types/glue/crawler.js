"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Targets {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Targets = Targets;
class JdbcTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JdbcTarget = JdbcTarget;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class S3Target {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Target = S3Target;
class SchemaChangePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SchemaChangePolicy = SchemaChangePolicy;
class Crawler extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Glue::Crawler', properties);
    }
}
Crawler.Targets = Targets;
Crawler.JdbcTarget = JdbcTarget;
Crawler.Schedule = Schedule;
Crawler.S3Target = S3Target;
Crawler.SchemaChangePolicy = SchemaChangePolicy;
exports.default = Crawler;
