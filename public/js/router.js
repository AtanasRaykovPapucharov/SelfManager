
const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					mainCtrl.showHome();
					mainCtrl.showCategories();
				},
				'/todos': () => {
					mainCtrl.showTodos();
					mainCtrl.showCategories();
				},
				'/events': () => {
					mainCtrl.showEvents();
					mainCtrl.showCategories();
				},
				'/signin': () => {
					mainCtrl.showSignIn();
				},
				'/signup': () => {
					mainCtrl.showSignUp();
				},
				'/signout': () => {
					userCtrl.signOut();
				},
				'/signin-send': () => {
					userCtrl.signIn();
					appRouter.navigate('/home');
				},
				'/signup-send': () => {
					userCtrl.signUp();
					appRouter.navigate('/signin');
				},
				'/add-todo': () => {

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
