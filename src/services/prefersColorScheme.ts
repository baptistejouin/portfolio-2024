export function setup() {
	const html = document.querySelector("html");
	if (
		localStorage.getItem("theme") === "dark" ||
		(!(localStorage.getItem("theme")) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	)
		html.classList.add("dark");
}