import { NextResponse } from "next/server";

const AFFILIATE_URL = "https://pmrevo.com/ql?pm_cid=edd67ae14baa425c902c";

export function GET() {
  return NextResponse.redirect(AFFILIATE_URL, { status: 302 });
}
