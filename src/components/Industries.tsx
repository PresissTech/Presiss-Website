import socialMediaImg from "@/assets/industries/social-media.png";
import ecommerceImg from "@/assets/industries/ecommerce.png";
import entertainmentImg from "@/assets/industries/entertainment.png";
import healthcareImg from "@/assets/industries/healthcare.png";
import aviationImg from "@/assets/industries/aviation.png";
import fintechImg from "@/assets/industries/fintech.png";
import educationImg from "@/assets/industries/education.png";
import restaurantImg from "@/assets/industries/restaurant.png";
import travelImg from "@/assets/industries/travel.png";
import logisticsImg from "@/assets/industries/logistics.png";
import gamesSportsImg from "@/assets/industries/games-sports.png";
import realEstateImg from "@/assets/industries/real-estate.png";

const Industries = () => {
  const industries = [
    { name: "Social Media", image: socialMediaImg },
    { name: "E-commerce", image: ecommerceImg },
    { name: "Entertainment", image: entertainmentImg },
    { name: "Healthcare", image: healthcareImg },
    { name: "Aviation", image: aviationImg },
    { name: "Fintech", image: fintechImg },
    { name: "Education", image: educationImg },
    { name: "Restaurant", image: restaurantImg },
    { name: "Travel", image: travelImg },
    { name: "Logistics", image: logisticsImg },
    { name: "Games & Sports", image: gamesSportsImg },
    { name: "Real Estate", image: realEstateImg },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Industries We Served
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border-2 border-border hover:border-accent transition-all hover:shadow-lg text-center group cursor-pointer animate-fade-in"
            >
              <img 
                src={industry.image} 
                alt={`${industry.name} icon`}
                className="w-16 h-16 mx-auto mb-4 object-cover rounded-full group-hover:scale-110 transition-transform"
              />
              <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
