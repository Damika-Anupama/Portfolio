# Web3Forms Setup Guide

The contact form uses **Web3Forms** - a completely free service that doesn't require any subscription or backend setup.

## How to Set Up (Takes 2 minutes)

### Step 1: Get Your Free Access Key

1. Go to https://web3forms.com/
2. Click "Get Started for Free"
3. Enter your email address: **damikaanupama@gmail.com**
4. Click "Create Access Key"
5. Check your email and copy the access key they send you

### Step 2: Add Your Access Key to the Website

1. Open `index.html` in your code editor
2. Find line 485 (look for the contact form section):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with the access key you received from Web3Forms

### Step 3: Test the Form

1. Run your website: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. You should receive the message at damikaanupama@gmail.com

## Features of Web3Forms (Free Plan)

✅ Unlimited form submissions
✅ No credit card required
✅ Email notifications to your inbox
✅ Spam protection included
✅ File uploads supported (if you add later)
✅ No branding/watermarks
✅ Works forever (free tier doesn't expire)

## Troubleshooting

**Form says "Failed to send message":**
- Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual access key
- Check browser console for errors (F12 > Console)
- Verify your internet connection

**Not receiving emails:**
- Check your spam/junk folder
- Make sure you used the correct email when creating the access key
- Wait a few minutes - sometimes there's a slight delay

**Want to customize the form:**
- You can add more fields by editing the HTML in `index.html`
- See Web3Forms documentation: https://docs.web3forms.com/

## Alternative: Mailto Link (Backup Option)

If you prefer a simpler solution without any setup, you can replace the form with a simple mailto link:

```html
<a href="mailto:damikaanupama@gmail.com?subject=Contact from Portfolio" class="btn btn-common">
  Send Email
</a>
```

This will open the user's default email client instead of sending through the form.

## Privacy & Security

- Web3Forms is GDPR compliant
- They don't store form submissions permanently
- Your email is not exposed in the HTML source code
- No tracking or analytics on your form submissions
- All submissions are sent directly to your email

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com/
- Contact Web3Forms Support: https://web3forms.com/support
- Or email me at: damikaanupama@gmail.com

---

**Note:** Once you set up the access key, the contact form will work immediately. No backend, no server, no database needed!
