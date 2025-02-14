import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    return (
        <div>
        
            <ul>
                {travelPlans.map((plan) => (
                    <li key={plan.id}>
                        <h3>{plan.destination}</h3>
                        <img src={plan.image} alt={plan.destination} className="travel-image" />
                        <p>{plan.description}</p>
                        <p><strong>Días:</strong> {plan.days}</p>
                        <p><strong>Precio:</strong> {plan.totalCost}€</p>

                        {/*Iteration 2 - labels based on the cost of each travel plan*/}
                        {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
                        {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
                        {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelList; 