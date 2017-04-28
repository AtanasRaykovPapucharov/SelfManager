
const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					mainCtrl.showHome();
					hasUser().then((hasUser) => {
						if (hasUser) {
							userCtrl.showCategories();
						}
					})
				},
				'/todos': () => {
					mainCtrl.showTodos();
					hasUser().then((hasUser) => {
						if (hasUser) {
							userCtrl.showCategories();
						}
					})
				},
				'/events': () => {
					mainCtrl.showEvents();
					hasUser().then((hasUser) => {
						if (hasUser) {
							userCtrl.showCategories();
						}
					})
				},
				'/signin': () => {
					userCtrl.showSignIn();
				},
				'/signup': () => {
					userCtrl.showSignUp();
				},
				'/signout': () => {
					userCtrl.signOut();
					appRouter.navigate('/home');
				},
				'/signin-send': () => {
					appRouter.navigate('/home');
					userCtrl.signIn();
				},
				'/signup-send': () => {
					appRouter.navigate('/signin');
					userCtrl.signUp();
				},
				'/add-todo': () => {
					mainCtrl.addTodo();
				},
				'/add-event': () => {
					mainCtrl.addEvent();
				},
				'/todo/:id': (params) => {
					let todoId = params.id;
					mainCtrl.singleTodo(todoId);
				},
				'/': () => {
					appRouter.navigate('/home');
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(function () {
				alert('Error! Router not found!');
			})
			.resolve();
	})
}
