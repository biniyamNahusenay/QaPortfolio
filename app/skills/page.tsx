// app/skills/page.tsx
export default function SkillsPage() {
  const skills = {
    'QA & Testing': ['Manual Testing', 'Automation Testing', 'Postman', 'Rest Assured'],
    'Automation Tools': ['Selenium WebDriver', 'JMeter'],
    'CI/CD & DevOps': ['Jenkins', 'CI/CD', 'GitHub Actions'], // Added GitHub Actions based on initial plan
    'Programming Languages': ['Java', 'JavaScript'],
    'Web Development': ['MERN Stack (MongoDB, Express.js, React.js, Node.js)'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
    'Version Control & Deployment': ['Git', 'WildFly'],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
              {category}
            </h2>
            <ul className="list-none space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center text-lg text-gray-700">
                  <span className="text-blue-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}