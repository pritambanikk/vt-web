# Razorpay Payment Integration Setup

## Environment Variables Required

Create a `.env.local` file in the frontend directory with the following variables:

```bash
# Supabase Configuration (existing)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Razorpay Configuration (new)
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
```

## Getting Razorpay Credentials

1. **Sign up for Razorpay**: Go to [razorpay.com](https://razorpay.com) and create an account
2. **Access Dashboard**: Log in to your Razorpay dashboard
3. **Generate API Keys**: 
   - Go to Settings > API Keys
   - Click "Generate Key Pair"
   - Copy the Key ID and Key Secret
4. **Set up Webhooks**:
   - Go to Settings > Webhooks
   - Click "Add New Webhook"
   - URL: `https://yourdomain.com/api/webhooks/razorpay`
   - Events to subscribe:
     - `payment.captured`
     - `payment.failed`
     - `refund.processed`
     - `refund.failed`
   - Copy the webhook secret
5. **Test vs Production**:
   - Use test credentials for development
   - Use production credentials for live environment

## Payment Configuration

The payment amounts are configured in `src/lib/payment-config.ts`:

- Legal Notice: ₹999
- Consultation: ₹1,499  
- Document Drafting: ₹2,499
- Corporate Retainer: ₹9,999

## Testing

1. Use Razorpay test cards for development:
   - Card Number: 4111 1111 1111 1111
   - Expiry: Any future date
   - CVV: Any 3 digits
   - Name: Any name

2. Test payment flow:
   - Submit lead form
   - Choose "Pay Advance" option
   - Complete payment with test card
   - Verify payment status in database

## Security Notes

- Never commit `.env.local` to version control
- Keep Razorpay credentials secure
- Use HTTPS in production
- Verify payment signatures server-side (already implemented)
- Webhook signatures are verified for security
- All payment events are logged for audit trails

## Webhook Events Handled

The webhook endpoint (`/api/webhooks/razorpay`) handles these events:

- **payment.captured**: Payment successfully completed
- **payment.failed**: Payment failed or was declined
- **refund.processed**: Refund was successfully processed
- **refund.failed**: Refund processing failed

Each event updates the lead's payment status in the database accordingly. 