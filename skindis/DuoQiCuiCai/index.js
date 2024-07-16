Page({
  data: {
    email: '',
    password: ''
  },

  handleEmailInput(event) {
    this.setData({
      email: event.detail.value
    });
  },

  handlePasswordInput(event) {
    this.setData({
      password: event.detail.value
    });
  },

  handleSubmit() {
    // Here you can handle form submission
    console.log('Email:', this.data.email);
    console.log('Password:', this.data.password);
  }
});
