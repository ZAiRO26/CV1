# Email Setup Instructions

To enable the contact form email functionality, you need to configure Gmail credentials:

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

## Step 2: Generate App Password
1. Go to Google Account > Security > 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Copy the 16-character password

## Step 3: Update Environment Variables
Edit the `.env` file in your project root:

```env
# Replace with your actual Gmail credentials
EMAIL_USER=sudoku9nine@gmail.com
EMAIL_PASS=your-16-character-app-password

# Server Configuration
PORT=3001
```

## Step 4: Start Both Servers
Run both the frontend and backend servers:

```bash
# Terminal 1: Frontend (already running)
npm run dev

# Terminal 2: Backend
npm run server

# Or run both together:
npm run dev:full
```

## Step 5: Test the Contact Form
1. Go to http://localhost:5173/contact
2. Fill out the form
3. Submit - you should receive an email at sudoku9nine@gmail.com

## Security Notes
- Never commit your actual credentials to version control
- The `.env` file is already in `.gitignore`
- Use app passwords, not your regular Gmail password
- Consider using environment variables in production

## Troubleshooting
- If emails aren't sending, check the server terminal for error messages
- Ensure both servers are running on different ports (5173 for frontend, 3001 for backend)
- Verify your Gmail app password is correct
- Check that 2FA is enabled on your Google account