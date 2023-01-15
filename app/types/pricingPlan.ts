import type { FunctionComponent } from "react";

export interface IPricingPlan {
    id?: string;
    title: string;
    price: string;
    perks: string[];
    icon: FunctionComponent;
}