import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export default async function handler(
 req:any,
 res:any
){

 if(req.method !== "POST"){
   return res.status(405).json({
     message:"Method not allowed"
   });
 }

 try{

   const {
      name,
      organisation,
      email,
      enquiry,
      description
   } = req.body;

   await resend.emails.send({

      from:
      "onboarding@resend.dev",

      to:
      "sarthak.malu1@gmail.com",

      subject:
      `New enquiry from ${name}`,

      html:`

      <h2>New Form Submission</h2>

      <p><b>Name:</b>
      ${name}</p>

      <p><b>Organisation:</b>
      ${organisation}</p>

      <p><b>Email:</b>
      ${email}</p>

      <p><b>Enquiry:</b>
      ${enquiry}</p>

      <p><b>Description:</b>
      ${description}</p>
      `
   });

   res.status(200).json({
      success:true
   });

 }catch(err){

   res.status(500).json({
      success:false
   });

 }
}