import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ params }) => {
    if (params["*"] === "login" || params["*"] === "register") {
        return redirect("/auth");
    }

    throw new Response("Not found", { status: 404 });
};