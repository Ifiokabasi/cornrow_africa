export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// ✅ Initialize Resend outside handler (safe)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase environment variables are missing");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const body = await req.json();

    const { fullName, email, phone, track, role, story } = body;

    // 1. Save to Supabase
    const { error } = await supabase.from("applications").insert([
      {
        full_name: fullName,
        email,
        phone,
        track,
        role,
        story,
      },
    ]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    // 2. Send confirmation email (AFTER successful save)
    try {
      await resend.emails.send({
        from: "Cornrow Academy <onboarding@resend.dev>",
        to: email,
        subject: "Your Cornrow Academy Application Has Been Received 🎬",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Hi ${fullName},</h2>

            <p>We’ve received your application for <strong>Cornrow Academy</strong>.</p>

            <p><strong>Application Summary:</strong></p>
            <ul>
              <li>Track: ${track}</li>
              <li>Role: ${role || "Not specified"}</li>
            </ul>

            <p>We’ll review your application and respond soon with next steps.</p>

            <br/>
            <p>— Cornrow Academy Team 🎬</p>
          </div>
        `,
      });
    } catch (emailError) {
      // ⚠️ Important: don't fail whole request if email fails
      console.error("Email failed:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}