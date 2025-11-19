# EmailJS Setup Guide

Your contact form is now configured to use EmailJS! Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Other**: Configure SMTP settings
4. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Set the template variables:
   - `from_name` - sender's name
   - `from_email` - sender's email
   - `subject` - message subject
   - `message` - message content
   - `to_name` - your name (Sanath Suram)
   - `reply_to` - sender's email for replies

5. Note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (also called User ID)
3. Note it down (e.g., `user_abc123xyz`)

## 5. Configure Environment Variables

Create a `.env` file in your project root with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Form

1. Restart your development server: `npm start`
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your email inbox for the message
5. Verify the reply-to address works correctly

## 7. Security Notes

- ✅ **Safe**: Your EmailJS credentials are environment variables
- ✅ **Rate Limited**: EmailJS has built-in rate limiting
- ✅ **Spam Protection**: EmailJS includes basic spam protection
- ⚠️ **Free Tier**: 200 emails/month (upgrade if needed)

## 8. Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**
   - Check your `.env` file exists and has correct values
   - Restart your development server

2. **Form submits but no email received**
   - Verify your Service ID, Template ID, and Public Key
   - Check your email spam folder
   - Test with EmailJS dashboard

3. **CORS errors**
   - Ensure you're using the correct domain in EmailJS settings
   - Add your domain to EmailJS allowed origins

### Support:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Your email: sanathsuram1214@gmail.com

---

## What's Implemented:

✅ **Full EmailJS Integration**
✅ **Environment Variables for Security**
✅ **Success/Error Status Messages**
✅ **Form Validation**
✅ **Loading States**
✅ **Responsive Design**
✅ **Dark/Light Mode Support**

Your contact form is now production-ready!
