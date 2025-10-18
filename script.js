status.textContent = 'Login successful! Redirecting...';
status.classList.add('success');
setTimeout(() => {
  window.location.href = 'student-dashboard.html';
}, 1000);

// Show success message when a note is "uploaded"
document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.querySelector("#uploadForm");

  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop actual submission
      alert("✅ Note submitted successfully for review!");
      uploadForm.reset(); // clear form
    });
  }
});

// Filter notes by search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const notes = document.querySelectorAll("#notesList .note");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
      notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        note.style.display = text.includes(filter) ? "block" : "none";
      });
    });
  }
});