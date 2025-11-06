// app/projects/page.tsx
export default function ProjectsPage() {
  const projects = [
    {
      title: 'Banking Application Test Automation',
      description:
        'Developed and executed comprehensive test cases for banking application endpoints, including crucial functionalities like fund transfers and mini-statements. Verified seamless integrations using Postman and ensured proper communication with backend systems. Focused on API-level testing and data integrity.',
      tags: ['API Testing', 'Postman', 'Automation', 'Jenkins', 'Financial Services'],
      link: 'https://github.com/biniyamNahusenay', // Placeholder, link to a relevant repo if available
    },
    {
      title: 'CI/CD Pipeline Setup for Spring Boot API',
      description:
        'Designed and implemented a robust CI/CD pipeline for a Spring Boot REST API using Jenkins. This involved automated builds, unit/integration test execution, and deployment to a staging environment, significantly improving release efficiency and reliability.',
      tags: ['CI/CD', 'Jenkins', 'Spring Boot', 'Java', 'Automation'],
      link: 'https://github.com/biniyamNahusenay', // Placeholder
    },
    {
      title: 'Performance Testing with JMeter',
      description:
        'Conducted load and performance testing for a web application using Apache JMeter. Identified performance bottlenecks, analyzed response times, and generated detailed reports to ensure the application could handle high user traffic efficiently.',
      tags: ['Performance Testing', 'JMeter', 'Load Testing', 'Web Applications'],
      link: 'https://github.com/biniyamNahusenay', // Placeholder
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-100 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{project.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-auto"
              >
                View Project on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-2h4m0 0l-5-5m5 5L14 10"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}