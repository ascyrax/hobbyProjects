import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useToast(mode, mssg) {
	if (mode == "error") toastError(mssg);
	else if (mode == "success") toastSuccess(mssg);
	else if (mode == "warn") toastWarn(mssg);
	else if (mode == "info") toastInfo(mssg);
	else if (mode == "default") toastDefault(mssg);
	function toastError(errorMessage) {
		toast.error(errorMessage, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}

	function toastSuccess(successMessage) {
		toast.success(successMessage, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}
	function toastInfo(infoMessage) {
		toast.info(infoMessage, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}

	function toastWarn(warnMessage) {
		toast.warn(warnMessage, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}

	function toastDefault(defaultMessage) {
		toast(defaultMessage, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	}
}
