import type { FunctionComponent } from "react";

interface PricingPlanProps {
    title: string;
    price: number;
    perks: string[];
    icon: FunctionComponent;
}

const PricingPlan: FunctionComponent<PricingPlanProps> = ({ title, price, perks, icon }): JSX.Element => {
    const Icon = icon;
    return (
        <article>
            <header>
                <div className="icon">
                    <Icon />
                </div>
                <h2>{title}</h2>
                <p>{price}</p>
            </header>
            <div className="plan-content">
                <ol>
                    {perks.map((perk) => (
                        <li key={perk}>{perk}</li>
                    ))}
                </ol>
                <div className="actions">
                    <a href="/not-implemented">Learn More</a>
                </div>
            </div>
        </article>
    );
};