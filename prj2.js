// https://icanhazdadjoke.com/api
const jks = document.getElementById("joke321");
const jkbut = document.getElementById("jkbtn001");
const generatejokes = async () => {
	const setHeader = {
		Accept: "application/json",
	};
	try {
		const awm = await fetch(
			"https://api.chucknorris.io/jokes/random",
			setHeader
		)
			.then((res) => res.json())
			.then((data) => {
				jks.innerHTML = `${data.value}`;
				console.log(data.value);
			});
	} catch (err) {
		console.log(`The error is ${err}`);
	}
};
jkbut.addEventListener("click", generatejokes);
generatejokes();
