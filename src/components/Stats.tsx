const Stats = () => {
  const stats = [
    { value: "07+", label: "Years of Success" },
    { value: "3x", label: "Total Growth Rate" },
    { value: "100+", label: "Projects Delivered" },
    { value: "100+", label: "Clients Served" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Hundreds of Businesses Succeed with{" "}
          <span className="text-accent">Presiss Technologies</span> – Here's Why
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
