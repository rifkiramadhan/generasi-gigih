const validateForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError('Silakan lengkapi alamat email anda');
    return false;
  }

  if (password.length < 6) {
    displayError('Password minimal harus 6 karakter');
    return false;
  }

  if (email.trim() === '' || password.trim() === '') {
    displayError('Email dan kata sandi tidak boleh kosong');
    return false;
  }

  showSuccessMessage();

  return true;
};

const showSuccessMessage = () => {
  const container = document.getElementById('container');
  container.innerHTML = `
      <h1>Login Successful</h1>
      <p style="text-align: center;">Welcome to your account!</p>
    `;
};

const displayError = (message) => {
  const errorMsg = document.getElementById('error-msg');
  errorMsg.textContent = message;
  errorMsg.classList.add('fade-in');

  setTimeout(() => {
    errorMsg.classList.remove('fade-in');
  }, 3000);
};
