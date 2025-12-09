import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Chirag is one the top talented engineers I have worked with, very professional, and has good business understanding. His flexibility and speed made a huge difference in delivering the project in perfect shape. Also, he's very expert on Flutter development.",
      client: "Bader",
      companyName: ""
    },
      {
      text: "Hiren is an exceptional Android developer and iOS developer with a strong knowledge of Mobile application development. I can attest to their exceptional skills and dedication to delivering outstanding results. I highly recommend hiring this individual again due to their exceptional skills and expertise in mobile app development.",
      client: "Ayoola A.",
      companyName: "Gofernets"
    },
    {
      text: "I had the pleasure of working with Hiren. Hiren is outstanding mobile application developer. His expertise, professionalism, and commitment to delivering high-quality results were truly impressive. The developer demonstrated excellent communication skills, ensuring a smooth and collaborative process. I highly recommend this developer for anyone seeking a skilled and reliable professional for their mobile app development needs.",
      client: "Surat (M Corp.)",
      companyName: ""
    },
    {
      text: "Chirag possesses exceptional app development skills. He understands project requirements patiently and implements them quite well",
      client: "Andrew",
      companyName: ""
    },
    {
      text: "Hiren did a brilliant job on my project. It was a really wonderful experience working with him. Felt like we were a single team with him during the contract. Also, you can rely on his advice if your project faces difficulties. Highly recommended, will hire Mikhail for further project and maintenance of this one!",
      client: "Leo",
      companyName: ""
    }
  ];

return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Trusted Globally By Leading Enterprises
        </h2>
        
        <div className="mt-12 px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full">

            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-2 hover:border-accent transition-colors animate-fade-in h-full">
                    <CardContent className="p-6 space-y-4">
                      <Quote className="w-10 h-10 text-accent" />
                      <p className="text-muted-foreground leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3 pt-4">
                        {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary"></div> */}
                        <div>
                          <p className="font-semibold text-primary">{testimonial.client}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.companyName}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
