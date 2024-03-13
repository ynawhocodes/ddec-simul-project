import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.BASE_URL;
  const url = `/sample`;
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };

  try {
    const response = await fetch(baseUrl + url, {
      headers,
    });

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
