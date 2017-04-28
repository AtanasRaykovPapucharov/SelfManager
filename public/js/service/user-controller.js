'use strict';

const userCtrl = (() => {
	class UserCtrl {

		signOut() {
			localStorage.clear();
			$('#log-forms-link').html('Sign in / Sign up').attr('href', '#/signin');
			$('#user-name-view').html('');
			notifier.warningNo(`Bye, bye!`);
		}

		signIn() {
			let loginUser = (() => {
				return () => {
					let username = $('#signin-username').val();
					if (!validator.isValidUsername(username)) {
						$('#signin-username').val('');
						return;
					}

					let password = $('#signin-password').val();
					if (!validator.isValidPassword(password)) {
						$('#signin-password').val('');
						return;
					}

					$('#signin-username').val('');
					$('#signin-password').val('');

					let user = {
						username: username,
						password: hash.hashMd5(password)
					}

					return data.signInUser(user)
						.then((resp) => {
							let username = resp.result.username;
							let key = resp.result.authKey;

							localStorage.setItem('username', username);
							localStorage.setItem('authKey', key);

							$('#log-forms-link').html('Sign out').attr('href', '#/signout');
							$('#user-name-view').html(username);

							notifier.success(`Welcome, ${username}!`);
							return true;
						})
						.catch((err) => {
							notifier.error(`No such a user!`);
							return false;
						})
				}
			})();

			loginUser();

			$('#signin-btn').on('click', (event) => {
				event.preventDefault();
				loginUser();
			})
		}

		signUp() {
			let registrateUser = (() => {
				return () => {
					let email = $('#signup-email').val();
					if (!validator.isValidEmail(email)) {
						$('#signup-email').val('');
						return;
					}

					let username = $('#signup-username').val();
					if (!validator.isValidUsername(username)) {
						$('#signup-username').val('');
						return;
					}

					let password = $('#signup-password').val();
					if (!validator.isValidPassword(password)) {
						$('#signup-password').val('');
						return;
					}

					let user = {
						email: email,
						username: username,
						password: hash.hashMd5(password)
					}

					$('#signup-email').val('');
					$('#signup-username').val('');
					$('#signup-password').val('');

					data.signUpUser(user)
						.then((respUser) => {
							respUser.password = '';

							notifier.success('You are registered successfully!');
							return true;
						})
						.catch((err) => {
							console.log('Server error: ' + err);
							notifier.error('This username already exists!');
							return false;
						})
				}
			}
			)();

			registrateUser();

			$('#signup-btn').on('click', (event) => {
				event.preventDefault();
				registrateUser();
			})
		}
	}

	let newCtrl = new UserCtrl();
	return newCtrl
})();
