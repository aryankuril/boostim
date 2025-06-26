import { NextResponse } from "next/server";
import { connectDB } from "../../utils/db";
import contact from "../../models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    await connectDB();

    await contact.create({ firstName, lastName, email, phone, subject, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.error("Unknown Error:", error);
      return NextResponse.json({ msg: ["Unable to send message."], success: false });
    }
  }
}
