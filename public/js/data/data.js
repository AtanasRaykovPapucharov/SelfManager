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
			return requester.get('/api/categories');
		}

		//================================================//

		getEvents() {
			return requester.get('/api/events');
		}

		postEvents(user) {
			return requester.post('/api/events');
		}

		//================================================//

		getTodos() {
			return requester.get(`/api/todos`);
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
