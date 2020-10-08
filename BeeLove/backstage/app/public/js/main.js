window.onload = () => {
	upuserDefaultAvatar();
};

function upuserDefaultAvatar() {
	let btn = document.getElementById("btn1");
	btn.addEventListener("click", () => {
		let file = document.getElementById("file").files[0];
		let formData = new FormData();
		formData.append("userDefaultAvatar", file, file.name);
		// formData.append("name",name);
		const config = {
			headers: {
				"Content-Type": "multipart/form-data;boundary="/* + new Date().getTime() */
			}
		};
		
		console.log(file)
		axios.post("/upuserDefaultAvatar", formData, config).then((res) => {
			console.log(res.data);
		}).catch((err) => {
			console.log("ajax请求失败！");
			console.log(err);
		});
	});
}