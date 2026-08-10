const welcomeMail = (name, userId, company) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to InnoWare Technology</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f5f7fa;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }
        .header {
          background: linear-gradient(135deg, #06b6d4, #2563eb);
          color: #fff;
          text-align: center;
          padding: 30px 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .content {
          padding: 30px 25px;
          text-align: left;
          line-height: 1.6;
        }
        .content h2 {
          margin: 0 0 15px;
          font-size: 22px;
          color: #2563eb;
        }
        .highlight {
          font-weight: 600;
          color: #06b6d4;
        }
        .cta {
          display: inline-block;
          margin: 25px 0;
          padding: 12px 25px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #06b6d4, #2563eb);
          border-radius: 30px;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .cta:hover {
          opacity: 0.9;
        }
        .footer {
          background: #f1f5f9;
          text-align: center;
          padding: 20px;
          font-size: 13px;
          color: #64748b;
        }
      </style>
  </head>
  <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>Welcome to InnoWare Technology 🚀</h1>
        </div>

        <!-- Content -->
        <div class="content">
          <h2>Hello <span class="highlight">${name}</span>,</h2>
          <p>We’re excited to have you on board at <strong>${company}</strong>!</p>
          <p>Your account has been successfully created. Your unique User ID is:</p>
          <p><strong class="highlight">#${userId}</strong></p>

          <p>At InnoWare, we’re passionate about building smarter solutions and driving innovation together. We can’t wait to see what you’ll achieve.</p>

          <a href="https://innoware.com/login" class="cta">Get Started</a>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} InnoWare Technology. All rights reserved.</p>
          <p>123 Innovation Street, Tech Valley, India</p>
        </div>
      </div>
  </body>
  </html>
  `;
};



export default welcomeMail;