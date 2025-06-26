import { NextResponse } from "next/server";
import { connectDB } from "../../utils/db";
import contact from "../../models/contact.js";


export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const newContact = new Contact({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
    });

    await newContact.save();

    return NextResponse.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error saving data" }, { status: 500 });
  }
}
