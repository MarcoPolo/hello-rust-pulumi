import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const iamForLambda = new aws.iam.Role("iamForLambda", {
    assumeRolePolicy: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
`,
});

const testLambda = new aws.lambda.Function("testLambda", {
    code: new pulumi.asset.FileArchive("./lambda.zip"),
    // This wont work until this gets merged: https://github.com/pulumi/pulumi/pull/4018
    // code: new pulumi.asset.AssetArchive({
    //     "bootstrap": new pulumi.asset.FileAsset("./hello-lambda/target/x86_64-unknown-linux-musl/release/hello-lambda"),
    // }),
    handler: "doesntmatter",
    role: iamForLambda.arn,
    runtime: "provided",
});

const api = new awsx.apigateway.API("helloAPI", {
    routes: [{
        path: "/",
        method: "GET" as const,
        eventHandler: testLambda
    }]
})

export const url = api.url