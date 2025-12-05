const Technologies = () => {
  const technologies = [
    "Flutter",
    "Angular",
    "Java",
    "iOS",
    "HTML",
    "Laravel",
    "Kotlin",
    "Python",
    "PHP",
    "Vue",
    "React JS",
    "Node.js",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Technologies & Platforms We Work With
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors cursor-pointer group animate-fade-in"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 group-hover:from-accent group-hover:to-secondary flex items-center justify-center transition-all">
                <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors">
                  {tech.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-center text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
