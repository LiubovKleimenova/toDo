const { admin, db } = require("../util/admin");
const { config } = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");

exports.loginUser = (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	const { valid, errors } = validateLoginData(user);
	if (!valid) return res.status(400).json(errors);

	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then((data) => data.user.getToken())
		.then((token) => res.json({ token }))
		.catch((err) => {
			console.error(err);
			return res.status(403).json({ general: "wrong credentials" });
		});
};

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-analytics.js"></script>
