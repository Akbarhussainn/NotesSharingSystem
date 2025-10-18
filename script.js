status.textContent = 'Login successful! Redirecting...';
status.classList.add('success');
setTimeout(() => {
  window.location.href = 'student-dashboard.html';
}, 1000);