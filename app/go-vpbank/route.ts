import { NextResponse } from "next/server";

const AFFILIATE_URL = "https://pmrevo.com/ql/SScy0FlXX";

export function GET() {
  return NextResponse.redirect(AFFILIATE_URL, { status: 302 });
}
