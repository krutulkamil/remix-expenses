import type { FunctionComponent } from "react";
import type { IPricingPlan } from "~/types/pricingPlan";

const PricingPlan: FunctionComponent<IPricingPlan> = ({ title, price, perks, icon }): JSX.Element => {
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

export default PricingPlan;