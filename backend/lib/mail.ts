import { createTransport, getTestMessageUrl } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string) {
  return `
    <div className="email" style="
      border: 1px solid grey;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 18px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>
      <p>😘, Bloom Essentials</p>
    </div>
  `;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email the user a token
  const info = (await transport.sendMail({
    to,
    from: 'help@bloom.com',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Here is your Password Reset Token!. Do not sharee this with anyone you don't trust.
    if you did not request this link, you can ignore this email. If you have further questions, please email us at support@bloom.com
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
    `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}
