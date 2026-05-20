import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export default async function handler(
 req:any,
 res:any
){

 try {

   const {
      name,
      organisation,
      email,
      enquiry,
      description
   } = req.body;

   const { data, error } =
   await resend.emails.send({

      from:
      "onboarding@resend.dev",

      to:
      "stealthplayz77@gmail.com",

      subject:
      `New enquiry from ${name}`,

      html:`
      <h2>New Form Submission</h2>

      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Organisation:
      ${organisation}</p>
      <p>Enquiry :
      ${enquiry}</p>

      <p>Description:
      ${description}</p>
      `
   });

   console.log("DATA:",data);
   console.log("ERROR:",error);

   if(error){
      return res.status(500)
      .json(error);
   }

   return res.status(200)
   .json(data);

 } catch(err){

   console.log(err);

   return res.status(500)
   .json(err);
 }
}