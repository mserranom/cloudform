"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BounceAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BounceAction = BounceAction;
class WorkmailAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkmailAction = WorkmailAction;
class StopAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StopAction = StopAction;
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class SNSAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SNSAction = SNSAction;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class LambdaAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaAction = LambdaAction;
class S3Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Action = S3Action;
class AddHeaderAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddHeaderAction = AddHeaderAction;
class ReceiptRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::ReceiptRule', properties);
    }
}
ReceiptRule.BounceAction = BounceAction;
ReceiptRule.WorkmailAction = WorkmailAction;
ReceiptRule.StopAction = StopAction;
ReceiptRule.Action = Action;
ReceiptRule.SNSAction = SNSAction;
ReceiptRule.Rule = Rule;
ReceiptRule.LambdaAction = LambdaAction;
ReceiptRule.S3Action = S3Action;
ReceiptRule.AddHeaderAction = AddHeaderAction;
exports.default = ReceiptRule;
