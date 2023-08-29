// promise 2nd example
let paymentSuccess2 = true;
const marks2 = 90;

function enroll () {
	const promise =  new Promise( function(resolve, reject) {
		console.log("Enrolling...");
		setTimeout(() => {
			if (paymentSuccess2) {
				resolve("Enrolled");
			} else {
				reject("Payment Failed");
			}
		}, 2000);
	});

	return promise;
}

function progress () {
	console.log("Progressing...");
	const promise  =  new Promise( function(resolve, reject) { 
		setTimeout(function() { 
			if (marks2 >= 80) {
				resolve("Progressing");
			} else {
				reject("Progressing Failed");
			}
		}, 2000);
	});

	return promise;
}

function getcertificate () {
	console.log("Getting Certificate...");
	const promise = new Promise( function ( resolve) {		
		setTimeout(() => {
			resolve("Certificate");
		}, 2000);
	});

	return promise;
}

enroll()
	.then(progress)
	.then(getcertificate)
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
		console.log(error);
	});