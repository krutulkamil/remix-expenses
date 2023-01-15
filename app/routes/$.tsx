import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ params }) => {
    if (params["*"] === "login") {
        return redirect("/auth?mode=login");
    }

    if (params["*"] === "register" || params["*"] === "signup") {
        return redirect("/auth?mode=signup");
    }

    throw new Response("Not found", { status: 404 });
};