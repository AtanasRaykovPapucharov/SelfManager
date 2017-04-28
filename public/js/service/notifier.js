'use strict';

const notifier = (() => {
	class Notifier {

		success(msg) {
			toastr.success(msg, 'SUCCESS', { timeOut: 3000 });
		}

		error(msg) {
			toastr.error(msg, 'ERROR', { timeOut: 3000 });
		}

		warning(msg) {
			toastr.warning(msg, 'WARNING', { timeOut: 3000 });
		}

		warningNo(msg) {
			toastr.info(msg, '', { timeOut: 3000 });
		}
	}

	const notifier = new Notifier();
	return notifier
})();