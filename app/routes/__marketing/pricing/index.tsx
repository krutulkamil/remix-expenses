import PricingPlan from "~/components/marketing/PricingPlan";
import { FaTrophy, FaHandshake } from "react-icons/fa";
import type { IPricingPlan } from "~/types/pricingPlan";
import type { FunctionComponent } from "react";
import type { MetaFunction, HeadersFunction } from "@remix-run/node";

export const PRICING_PLANS: IPricingPlan[] = [
    {
        id: "p1",
        title: "Basic",
        price: "Free forever",
        perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
        icon: FaHandshake
    },
    {
        id: "p2",
        title: "Pro",
        price: "$9.99/month",
        perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
        icon: FaTrophy
    }
];

const PricingPage: FunctionComponent = (): JSX.Element => {
    return (
        <main id="pricing">
            <h2>Great Product, Simple Pricing</h2>
            <ol id="pricing-plans">
                {PRICING_PLANS.map((plan) => (
                    <li key={plan.id} className="plan">
                        <PricingPlan
                            title={plan.title}
                            price={plan.price}
                            perks={plan.perks}
                            icon={plan.icon}
                        />
                    </li>
                ))}
            </ol>
        </main>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Pricing | Remix Expenses",
    description: "See our pricing plans."
});

export const headers: HeadersFunction = ({ parentHeaders }) => {
    return {
        "Cache-Control": parentHeaders.get("Cache-Control")!
    };
};

export default PricingPage;