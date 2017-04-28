$(() => {
	hasUser().then((hasUser) => {
		view.header('.header', { isLogged: hasUser.isLogged, username: hasUser.username });
		view.footer('.footer', {});
	})

	router.init;
});
