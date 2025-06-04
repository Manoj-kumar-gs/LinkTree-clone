import mongodbconnect from "@/lib/mongodb";
export async function POST(request) {
    const data = await request.json()
    console.log(data);
    const client = await mongodbconnect;
    const db = client.db("bittree")
    const collection = db.collection("bittreedata");
    const existingHandle = await collection.findOne({handle: data.handle});
    if (existingHandle) {
        console.log("existingHandle:", existingHandle);
        return new Response(JSON.stringify({status:400, message:"Handle already exists"}))
    }
    await collection.insertOne(data);
    return new Response(JSON.stringify({status:200, message:"success", data:data}))
    // redirect(`${process.env.NEXT_PUBLIC_HOST}/product/?handle=${data.handle}`);
}