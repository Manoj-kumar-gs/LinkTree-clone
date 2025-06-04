import { NextResponse } from "next/navigation";
import mongodbconnect from "@/lib/mongodb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const handle = searchParams.get("handle");

    if (!handle) {
        return NextResponse.json({ exists: false }, { status: 400 });
    }

    const client = await mongodbconnect;
    const db = client.db("bittree");
    const collection = db.collection("bittreedata");

    const existingHandle = await collection.findOne({ handle:handle });

    if (existingHandle) {
        return new Response(JSON.stringify({status:200, exists:true, data:existingHandle}))
    } else {
        return new Response(JSON.stringify({status:200, exists:false}))
    }
}