import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM user";
        const [user] = await db.query(sql);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message });
    }
}
