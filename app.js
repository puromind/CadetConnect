const views = ["feed", "chats", "marketplace", "communities"];
const toast = document.querySelector(".toast");
const launchSplash = document.querySelector("#launch-splash");
window.setTimeout(() => {
  launchSplash?.classList.add("is-hidden");
  window.setTimeout(() => launchSplash?.remove(), 420);
}, 1180);
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}
function switchView(view) {
  if (!views.includes(view)) return;
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.querySelectorAll(".view").forEach((section) => section.classList.toggle("active", section.id === `${view}-view`));
  document.querySelector(".sidebar")?.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-view-link]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.viewLink)));
document.querySelector(".mobile-menu")?.addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
document.querySelectorAll(".post-actions button").forEach((button) => button.addEventListener("click", () => {
  if (button.textContent.includes("Like")) {
    button.textContent = button.textContent.includes("Unlike") ? "♡ Like" : "♥ Unlike";
    showToast(button.textContent.includes("Unlike") ? "Added to your likes" : "Like removed");
  } else showToast("Thanks for keeping the community connected");
}));
document.querySelectorAll(".community-card button").forEach((button) => button.addEventListener("click", () => {
  button.textContent = button.textContent === "Joined" ? "Join community" : "Joined";
  showToast(button.textContent === "Joined" ? "You joined the community" : "You left the community");
}));
document.querySelectorAll(".pill").forEach((pill) => pill.addEventListener("click", () => {
  document.querySelectorAll(".pill").forEach((item) => item.classList.remove("active"));
  pill.classList.add("active");
  showToast(`Showing ${pill.textContent.toLowerCase()} listings`);
}));
document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.action === "report") document.querySelector("#modal").classList.add("open");
  else if (button.dataset.action === "login") document.querySelector("#login-modal").classList.add("open");
  else showToast(button.dataset.action === "notifications" ? "You’re all caught up" : "Settings are coming soon");
}));
document.querySelector(".modal-close")?.addEventListener("click", () => document.querySelector("#modal").classList.remove("open"));
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.close).classList.remove("open")));
document.querySelector("#modal")?.addEventListener("click", (event) => {
  if (event.target.id === "modal") event.currentTarget.classList.remove("open");
});
document.querySelector("#confirm-report")?.addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("open");
  showToast("Report received. Thank you for helping keep CadetConnect safe.");
});
document.querySelector("#login-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#login-modal").classList.remove("open");
  showToast("Demo sign-in complete — no credentials were transmitted");
});
document.querySelector("#toggle-password")?.addEventListener("click", (event) => {
  const password = document.querySelector("#login-password");
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  event.currentTarget.textContent = visible ? "Show" : "Hide";
  event.currentTarget.setAttribute("aria-pressed", String(!visible));
});
document.querySelectorAll("[data-provider]").forEach((button) => button.addEventListener("click", () => {
  showToast(`${button.dataset.provider} sign-in is ready for OAuth configuration`);
}));
document.querySelectorAll("#new-post, #new-post-alt").forEach((button) => button.addEventListener("click", () => showToast("Post composer is ready for your update")));
document.querySelector(".message-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (input.value.trim()) { showToast("Message sent"); input.value = ""; }
});
document.querySelector("#global-search")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.currentTarget.value.trim()) showToast(`Searching for “${event.currentTarget.value.trim()}”`);
});
document.querySelector("#market-search")?.addEventListener("input", (event) => {
  const term = event.currentTarget.value.toLowerCase();
  document.querySelectorAll(".product").forEach((card) => card.style.display = card.textContent.toLowerCase().includes(term) ? "" : "none");
});
