// AR CAFE SPOT — small interactions

// Mobile navigation
const body = document.body;
const toggle = document.querySelector(".nav-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
    toggle.setAttribute(
      "aria-expanded",
      body.classList.contains("nav-open") ? "true" : "false"
    );
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => body.classList.remove("nav-open"));
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Gentle reveal on scroll
const items = document.querySelectorAll(".reveal");

if (items.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Reservation form → opens the visitor's email app with the details filled in
const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {
  const EMAIL = "hello@arcafespot.com"; // replace with the café's real email

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(bookingForm);
    const get = (key) => (data.get(key) || "").toString().trim();

    const subject = `Table request — ${get("name") || "Website booking"}`;
    const lines = [
      "Hello AR CAFE SPOT,",
      "",
      "I would like to book a table.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Date: ${get("date")}`,
      `Time: ${get("time")}`,
      `Guests: ${get("guests")}`,
      `Notes: ${get("notes") || "—"}`,
      "",
      "Thank you!",
    ];

    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;

    const note = document.querySelector("#booking-note");
    if (note) {
      note.textContent =
        "Your email app should open with the details filled in — just press send. Prefer to talk? Call us on +1 (555) 012-3456.";
    }
  });
}
