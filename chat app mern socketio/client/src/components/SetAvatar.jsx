import axios from "axios";
import { useState, useEffect } from "react";
import {
	multiAvatarAPI,
	multiAvatarAPI_ACCESS_KEY,
	setAvatarRoute,
} from "../../utils/APIRoutes";

import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";

import loading01 from "../../src/images/loading01.gif";
import loading02 from "../../src/images/loading02.gif";
import loading03 from "../../src/images/loading03.gif";
import loading04 from "../../src/images/loading04.gif";
import loading05 from "../../src/images/loading05.gif";
import loading06 from "../../src/images/loading06.gif";
import loading07 from "../../src/images/loading07.gif";
import loading08 from "../../src/images/loading08.gif";
import loading09 from "../../src/images/loading09.gif";

export default function SetAvatar() {
	const [avatars, setAvatars] = useState(5);
	const [isLoading, setIsLoading] = useState(true);
	const [reload, setReload] = useState(
		Number(localStorage.getItem("ascyChat-avatarReloadCnt")) || 0
	);
	const [selectedAvatar, setSelectedAvatar] = useState(-1);
	const [loaderImageNumber, setLoaderImageNumber] = useState(1);
	const navigate = useNavigate();
	const loadingGifs = [
		loading01,
		loading02,
		loading03,
		loading04,
		loading05,
		loading06,
		loading07,
		loading08,
		loading09,
	];
	useEffect(() => {
		// console.log("useEffect 1");
		if (!checkForLoggedIn()) {
			navigate("/auth");
		} else if (!checkForAvatarSet()) {
			navigate("/setAvatar");
		} else {
			navigate("/");
		}
	}, []);
	useEffect(() => {
		localStorage.setItem("ascyChat-avatarReloadCnt", JSON.stringify(reload));
		async function fetchImages() {
			const newAvatars = await getRandomAvatars(4);
			setAvatars(newAvatars);
			setIsLoading(false);
		}
		fetchImages();
	}, [reload]);

	return (
		<>
			{isLoading ? (
				<div className="div-loading">
					<img
						src={loadingGifs[loaderImageNumber]}
						alt="loading avatars"
						className="img-loading"
					/>
				</div>
			) : (
				<div className="setAvatar">
					<h1>Pick your avatar</h1>
					<button
						className="reloadAvatars"
						onClick={(e) => {
							setReload((prevReload) => prevReload + 1);
							setIsLoading(true);
						}}
					>
						reload
					</button>
					<div className="avatars-container">
						{avatars.map((avatar, index) => (
							<div
								className={`avatar ${
									selectedAvatar == index ? "selected" : ""
								}`}
								key={index}
							>
								<img
									className={`img-avatar ${
										selectedAvatar == index ? "selected" : ""
									}`}
									src={`data:image/svg+xml;base64,${avatar}`}
									onClick={() => {
										handleAvatarSelect(index);
									}}
								/>
							</div>
						))}
					</div>
					<button className="setAvatarBtn" onClick={() => handleAvatarSubmit()}>
						Set as my avatar
					</button>
				</div>
			)}
		</>
	);

	async function getRandomAvatars(count) {
		let newAvatars = [];

		const randomNumber = Number(Math.floor(Math.random() * loadingGifs.length));
		setLoaderImageNumber(randomNumber);

		for (let i = 0; i < count; i++) {
			let randNumber = Math.floor(Number(Math.random() * 1000000));
			newAvatars.push(randNumber);
		}
		for (let i = 0; i < count; i++) {
			let img = await axios.get(
				`${multiAvatarAPI}/${newAvatars[i]}?apikey=${multiAvatarAPI_ACCESS_KEY}`
			);
			const buffer = new Buffer(img.data);
			newAvatars[i] = buffer.toString("base64");
		}

		return newAvatars;
	}

	function handleAvatarSelect(index) {
		setSelectedAvatar(index);
	}

	async function handleAvatarSubmit() {
		try {
			const username = localStorage.getItem("ascyChat-username");

			const payload = {
				username,
				userAvatar: avatars[selectedAvatar],
			};

			const serverRespone = await axios.post(setAvatarRoute, payload);
			console.log(serverRespone.data);

			if (serverRespone.data.status == true) saveAvatarStatusInLocalStorage();
		} catch (e) {
			console.log("error", e);
		}
	}

	function saveAvatarStatusInLocalStorage() {
		localStorage.setItem("ascyChat-isAvatarSet", "true");
		localStorage.setItem("ascyChat-userAvatar", avatars[selectedAvatar]);
		navigate("/");
	}
}
function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
