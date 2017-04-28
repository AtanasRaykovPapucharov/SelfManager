'use strict';

const data = (() => {
	class Data {

		signUpUser(user) {
			return requester.post('/api/users', user);
		}

		signInUser(user) {
			return requester.put('/api/users/auth', user);
		}

		//================================================//

		getCategories() {
			let options = {
				headers: {
					['x-auth-key']: localStorage.getItem('authKey')
				}
			};
			return requester.get('/api/categories', options);
		}

		//================================================//

		getEvents() {
			let options = {
				headers: {
					['x-auth-key']: localStorage.getItem('authKey')
				}
			};
			return requester.get('/api/events', options);
		}

		postEvents(user) {
			return requester.post('/api/events');
		}

		//================================================//

		getTodos() {
			let options = {
				headers: {
					['x-auth-key']: localStorage.getItem('authKey')
				}
			};
			return requester.get(`/api/todos`, options);
		}

		getTodoById(id) {
			return requester.put(`/api/todos/${id}`);
		}

		postTodos(user) {
			return requester.post('/api/todos');
		}
	}

	let newData = new Data();
	return newData;
})()
