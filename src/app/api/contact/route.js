import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json();
    
    if (!resend) {
      return Response.json({ error: 'Resend API key is not configured' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'OmniLink <onboarding@resend.dev>', // You should verify your domain in Resend
      to: ['your-email@example.com'], // Replace with your actual email
      subject: `New Quote Request: ${service} from ${name}`,
      html: `
        <h2>New Inquiry from OmniLink Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
