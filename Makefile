lambda.zip : hello-lambda/target/x86_64-unknown-linux-musl/release
	cp hello-lambda/target/x86_64-unknown-linux-musl/release/hello-lambda ./bootstrap && zip lambda.zip bootstrap && rm bootstrap
hello-lambda/target/x86_64-unknown-linux-musl/release : hello-lambda/src/*
	(cd hello-lambda; cross build --target=x86_64-unknown-linux-musl --release)

clean:
	rm lambda.zip


