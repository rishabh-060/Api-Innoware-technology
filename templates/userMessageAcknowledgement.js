const userMessageAcknowledgement = (name, subject) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We Received Your Message</title>
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
          color: #06b6d4;
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
          <h1>We Got Your Message ✅</h1>
        </div>

        <!-- Content -->
        <div class="content">
          <p>Hello <span class="highlight">${name}</span>,</p>
          <p>Thank you for reaching out to us! We have successfully received your message regarding:</p>
          <p><strong class="highlight">"${subject}"</strong></p>

          <p>Our support team will review your request and get back to you as soon as possible.</p>
          <p>We appreciate your patience and trust in <strong>InnoWare Technology</strong>.</p>
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

export default userMessageAcknowledgement;