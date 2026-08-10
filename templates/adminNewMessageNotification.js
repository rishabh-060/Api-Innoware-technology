const adminNewMessageNotification = (name, email, subject, message) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Message Received</title>
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
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #fff;
          text-align: center;
          padding: 30px 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 700;
        }
        .content {
          padding: 30px 25px;
          text-align: left;
          line-height: 1.6;
        }
        .highlight {
          font-weight: 600;
          color: #dc2626;
        }
        .footer {
          background: #f1f5f9;
          text-align: center;
          padding: 20px;
          font-size: 13px;
          color: #64748b;
        }
        .message-box {
          background: #f9fafb;
          border-left: 4px solid #06b6d4;
          padding: 15px;
          margin: 15px 0;
          font-size: 14px;
          color: #111827;
          border-radius: 6px;
        }
      </style>
  </head>
  <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>📨 New Message Received</h1>
        </div>

        <!-- Content -->
        <div class="content">
          <p>Hello Admin,</p>
          <p>You have received a new message from <span class="highlight">${name}</span>.</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <div class="message-box">
            ${message}
          </div>

          <p>Please respond at your earliest convenience.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} InnoWare Technology. Internal Notification.</p>
        </div>
      </div>
  </body>
  </html>
  `;
};

export default adminNewMessageNotification;