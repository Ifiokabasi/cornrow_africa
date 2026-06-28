import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("applications")
      .insert([
        {
          full_name: body.fullName,
          email: body.email,
          phone: body.phone,
          track: body.track,
          role: body.role,
          story: body.story,
        },
      ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}