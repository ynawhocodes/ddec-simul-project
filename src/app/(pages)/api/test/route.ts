import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "http://192.168.0.14:8080";
  const url = `/sample`;
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };

  try {
    const response = await fetch(baseUrl + url, {
      headers,
    });

    // const data = await response.json();
    // console.log("GET TEST>>>>>>>>>>>>", data);

    // return NextResponse.json(response);

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
