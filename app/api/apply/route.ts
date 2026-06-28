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
  subject: "Your Application Has Been Received — Cornrow Academy",

  html: `
  <div style="background:#0b0b0b;padding:40px 20px;font-family:Arial,sans-serif;color:#FDF8F2;">

    <div style="text-align:center;margin-bottom:30px;">
      <img src="https://cornrow-africa-git-main-ifiokabasi-ettang-s-projects.vercel.app/images/logo.png" width="60" style="border-radius:50%;" />
    </div>

    <div style="max-width:520px;margin:0 auto;background:#141210;padding:28px;border-radius:12px;border:1px solid rgba(255,215,0,0.2);">

      <h2 style="color:#FFD700;margin-bottom:10px;">
        Take Recorded 🎬
      </h2>

      <p style="font-size:14px;line-height:1.7;color:#FDF8F2;">
        Hi <strong>${fullName}</strong>,<br/><br/>

        Your application to <strong>Cornrow Academy</strong> has been successfully received.
      </p>

      <div style="margin:20px 0;padding:12px;border-left:3px solid #FFD700;background:#0f0f0f;">
        <p style="margin:0;font-size:13px;">
          <strong>Track:</strong> ${track}<br/>
          <strong>Role:</strong> ${role || "Not specified"}
        </p>
      </div>

      <p style="font-size:13px;line-height:1.6;color:#BFBFBF;">
        We are reviewing your application and will contact you soon with next steps.
      </p>

      <p style="margin-top:25px;font-size:12px;color:#FFD700;">
        — Cornrow Academy • Story. Faith. Transformation.
      </p>
    </div>

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