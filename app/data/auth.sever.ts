import { hash } from "bcryptjs";
import { prisma } from "~/data/database.server";
import type { User as IUser, PrismaPromise } from "@prisma/client";

export interface ResponseError extends Error {
    status?: number;
}

export const signup = async ({
                                 email,
                                 password
                             }: { email: IUser["email"], password: IUser["password"] }): Promise<PrismaPromise<IUser>> => {
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
        const error: ResponseError = new Error("A user with the provided email address exists already.");
        error.status = 422;
        throw error;
    }

    const passwordHash: string = await hash(password, 12);

    try {
        return await prisma.user.create({ data: { email, password: passwordHash } });
    } catch (error) {
        throw new Error("Failed to signup.");
    }
};