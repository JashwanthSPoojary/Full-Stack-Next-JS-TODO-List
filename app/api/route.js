import { ConnectDB } from "@/lib/config/db";
import TodoModal from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () =>{
    await ConnectDB();
}
LoadDB();

// custom   handler
export async function GET(request){
    const todos = await TodoModal.find({});
    return NextResponse.json({todos:todos})
}
export async function POST(request){
    const  { title,description } = await request.json();
    await TodoModal.create({
        title,
        description 
    });
    return NextResponse.json({msg:"Todo Created"});
}

export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModal.findByIdAndDelete(mongoId);
    return NextResponse.json({msg:"Todo Deleted"});
}

export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModal.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted: true
        }
    })
    return NextResponse.json({msg:"Todo Completed"});
}