'use strict';

const mainCtrl = (() => {
	class MainCtrl {
		showHome() {
			view.home('#content', {})
		}

		showTodos() {
			let todoz = (() => {
				return () => {
					if (!localStorage.getItem('username')) {
						notifier.warningNo('Please, sign in!');
						return;
					}
					data.getTodos()
						.then((todos) => {
							if (todos.result) {
								view.todos('#content', { data: todos.result });
							} else {
								view.todos('#content', {});
								notifier.info('You have no TODOs!');
							}
						})
						.catch((err) => {
							console.log(err);
						})
				}
			})();

			todoz();

			$('#todoz').on('click', () => {
				todoz();
			})
		}

		singleTodo(id) {
			data.getTodoById(id)
				.then((todo) => {
					view.singleTodo('#content', { data: todo.result })
				})
				.catch((err) => {
					console.log(err);
				})
		}

		showAddTodo() {
			view.addTodo('#content', {});
		}

		addTodo() {
			let adding = (() => {
				return () => {
					let todoObj = {
						category: $('#add-todo-category').val(),
						text: $('#add-todo-text').val(),
						state: $('#add-todo-state').val()
					}

					$('#add-todo-category').val('');
					$('#add-todo-text').val('');

					data.postTodos(todoObj)
						.then((resp) => {
							if (resp) {
								notifier.success('TODO added successfully!');
							}
						})
						.catch((err) => {
							console.log(err);
							notifier.error('TODO cannot be added!');
						});
				}
			})();

			adding();

			$('.btn#add-todo-btn').on('click', () => {
				adding();
			})
		}

		showEvents() {
			let eventz = (() => {
				return () => {
					if (!localStorage.getItem('username')) {
						notifier.warningNo('Please, sign in!');
						return;
					}
					data.getEvents()
						.then((events) => {
							if (events.result) {
								view.events('#content', { data: events.result })
							} else {
								view.events('#content', {})
								notifier.info('You have no EVENTs!');
							}
						})
						.catch((err) => {
							console.log(err);
						})
				}
			})();

			eventz();

			$('#eventz').on('click', () => {
				eventz();
			})
		}

		showAddEvent() {
			return view.addEvent('#content', {});
		}

		addEvent() {
			let adding = (() => {
				return () => {
					let eventObj = {
						category: $('#add-event-category').val(),
						title: $('#add-event-title').val(),
						description: $('#add-event-description').val()
					}

					data.postEvents(eventObj)
						.then((resp) => {
							if (resp) {
								notifier.success('EVENT added successfully!');
							}
						})
						.catch((err) => {
							console.log(err);
							notifier.error('EVENT cannot be added!');
						});

					$('#add-event-category').val('');
					$('#add-event-text').val('');
					$('#add-event-description').val('');
				}
			})();

			adding();

			$('.btn#add-todo-btn').on('click', () => {
				adding();
			})
		}

	}

	let newCtrl = new MainCtrl();
	return newCtrl;
})()
