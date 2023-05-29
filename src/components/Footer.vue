<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">
            &copy; 2023 BlueSky. All Rights Reversed.
          </p>
          <p class="contact-text">
            Contact: <a href="mailto:sm.ayd02@gmail.com">sm.ayd02@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  
  <style>
  .footer {
    background-color: rgb(219, 187, 129);
    padding: 20px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-text {
    margin-bottom: 10px;
  }
  
  .contact-text {
    font-size: 14px;
  }
  
  .contact-text a {
    color: #000000;
    font-style: italic;
    font-size: 15px;
    text-decoration:line;
  }
  
  .contact-text a:hover {
    color: rgb(159, 129, 95);
    text-decoration: underline;
  }
  </style>
  