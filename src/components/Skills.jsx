function  Skills() {
  const skills = [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "REACT JS",
  ];

    return (
        <section className="skills">
            <h2>Mes compétences</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className ="skill" key={index}>
                    {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills; 