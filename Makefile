lambda.zip : hello-lambda/target/release/hello-lambda
	cp hello-lambda/target/release/hello-lambda ./bootstrap && zip lambda.zip bootstrap && rm bootstrap
hello-lambda/target/release/hello-lambda :
	(cd hello-lambda; cargo build --release)

