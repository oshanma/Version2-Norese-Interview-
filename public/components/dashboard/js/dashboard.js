

  window.addEventListener("DOMContentLoaded", () => {
    const greetingEl = document.querySelector(".greeting h2");
    const hours = new Date().getHours();
    let timeGreeting = "Hello";

    if (hours < 12) timeGreeting = "Good morning";
    else if (hours < 18) timeGreeting = "Good afternoon";
    else timeGreeting = "Good evening";

    if (greetingEl) {
      greetingEl.innerHTML = `${timeGreeting}, Oshan! 👋`;
    }

    // Animate any progress bar (example: 50% completion)
    document.querySelectorAll("[data-progress]").forEach(bar => {
      const value = parseInt(bar.getAttribute("data-progress"));
      bar.style.width = "0%";
      bar.style.transition = "width 1s ease-in-out";

      setTimeout(() => {
        bar.style.width = `${value}%`;
      }, 300);
    });

    // Card hover animation
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
        card.style.transition = "transform 0.2s ease-in-out";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });

    // Logout alert (demo)
    const logoutBtn = document.querySelector('a.dropdown-item[href="#"][innerText="Logout"]');
    if (logoutBtn) {
      logoutBtn.addEventListener("click", e => {
        e.preventDefault();
        alert("You have been logged out!");
        // location.href = "/login.html"; // Optional redirect
      });
    }
  });

