'use strict';

const mainCtrl = (() => {
	class MainCtrl {
		showHome() {
			view.home('#content', {})
		}

		showTodos() {
			if (!localStorage.getItem('username')) {
				notifier.warningNo('Please, sign in!');
				return;
			}

			data.getTodos()
				.then((todos) => {
					if (todos.result.length === 0) {
						notifier.warningNo('You have no TODOs!');
					}
					view.todos('#content', { data: todos.result })
				})
				.catch((err) => {
					console.log(err);
				})
		}

		showEvents() {
			if (!localStorage.getItem('username')) {
				notifier.warningNo('Please, sign in!');
				return;
			}

			data.getEvents()
				.then((events) => {
					if (events.result.length === 0) {
						notifier.warningNo('You have no EVENTs!');
					}
					view.events('#content', { data: events.result })
				})
				.catch((err) => {
					console.log(err);
				})
		}

		showSignIn() {
			view.signin('#content-aside', {})
		}

		showSignUp() {
			view.signup('#content-aside', {})
		}

		showCategories() {
			data.getCategories()
				.then((categories) => {
					view.categories('#content-aside', {data: categories.result})
				})
		}
	}

	let newCtrl = new MainCtrl();
	return newCtrl;
})()
