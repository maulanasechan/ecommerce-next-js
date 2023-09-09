import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const existingStore = await prismadb.store.findFirst({
      where: {
        name: name,
        userId: userId,
      },
    });

    if (existingStore) {
      return new NextResponse("Store name is exist", { status: 400 });
    }

    const store_post = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store_post);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
