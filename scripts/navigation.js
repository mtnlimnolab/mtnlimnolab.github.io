const navigationToggle = document.querySelector(".nav-toggle");
const navigationLinks = document.getElementById("mobile-navigation");

if (navigationToggle && navigationLinks) {
    const navigation = navigationToggle.parentElement;
    navigation.classList.add("navigation-ready");
    navigationToggle.hidden = false;

    function setNavigationOpen(open) {
        navigationToggle.setAttribute("aria-expanded", String(open));
        navigationToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        navigationToggle.querySelector("span").textContent = open ? "×" : "☰";
        navigation.classList.toggle("navigation-open", open);
    }

    navigationToggle.addEventListener("click", () => {
        setNavigationOpen(navigationToggle.getAttribute("aria-expanded") !== "true");
    });
    navigationLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) setNavigationOpen(false);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navigationToggle.getAttribute("aria-expanded") === "true") {
            setNavigationOpen(false);
            navigationToggle.focus();
        }
    });
    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target)) setNavigationOpen(false);
    });
    window.matchMedia("(max-width: 760px)").addEventListener("change", () => {
        setNavigationOpen(false);
    });
}
