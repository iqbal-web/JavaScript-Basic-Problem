// promise 2nd example
let paymentSuccess3 = true;
const marks3 = 90;

function enroll () {
	const promise =  new Promise( function(resolve, reject) {
		console.log("Enrolling...");
		setTimeout(() => {
			if (paymentSuccess3) {
				resolve("Enrolled");
			} else {
				reject("Payment Failed");
			}
		}, 3000);
	});

	return promise;
}

function progress () {
	console.log("Progressing...");
	const promise  =  new Promise( function(resolve, reject) { 
		setTimeout(() => { 
			if (marks3 >= 80) {
				resolve("Progressing");
			} else {
				reject("Progressing Failed");
			}
		}, 3000);
	});

	return promise;
}

function getcertificate () {
	console.log("Getting Certificate...");
	const promise = new Promise( function ( resolve) {		
		setTimeout(() => {
			resolve("Certificate Send In Email...");
		}, 3000);
	});

	return promise;
}

async function course () { 
	try {
		await enroll();
		await progress();
		const message = await getcertificate();
		console.log(message);
	} catch (error) {
		console.log(error);
	}
}

course();