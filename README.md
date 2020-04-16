# Pulumi Managed Rust Lambda

A minimal project that sets up a Rust Lambda function with [Pulumi]. Changes are deployed on pushes to master.


## Features Demoed

1. [AWS Lambda Rust Runtime] for the lambda runtime.
2. Github Actions set to automatically update the stack and code on push to master.
3. Previews of stack changes on a PR.

[Pulumi]: https://www.pulumi.com/
[AWS Lambda Rust Runtime]: https://github.com/awslabs/aws-lambda-rust-runtime