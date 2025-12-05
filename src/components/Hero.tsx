import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Precisely building the digital foundations for the enterprises
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              We don’t just design interfaces; we shape seamless digital journeys that strengthen your business.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explore Our Services
            </Button>
          </div>

          <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-accent to-secondary p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/90"></div>
                      <div>
                        <p className="font-semibold text-white text-sm">Thomas Smith</p>
                        <p className="text-white/80 text-xs">Assistant</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <h3 className="font-semibold text-primary mb-3">Payments</h3>
                    <div className="text-xs text-muted-foreground mb-3">May 10, 2022</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                          <div className="text-xs">Monica Smith</div>
                        </div>
                        <span className="text-xs font-semibold text-green-600">$150</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-secondary/20"></div>
                          <div className="text-xs">Ernest Smith</div>
                        </div>
                        <span className="text-xs font-semibold text-green-600">$120</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <h3 className="font-semibold text-primary mb-2">My Account</h3>
                    <p className="text-xs text-muted-foreground mb-3">This Week</p>
                    <div className="h-24 flex items-end gap-1">
                      {[40, 60, 50, 70, 65, 80, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-accent to-secondary rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
