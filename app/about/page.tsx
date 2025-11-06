// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-100">About Me</h1>

      {/* Professional Summary */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Professional Summary</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Detail-oriented Quality Assurance Professional & SDET</span> 
            with strong experience in both <span className="font-medium">manual</span> and 
            <span className="font-medium">automation testing</span>. Skilled in designing, developing, and maintaining 
            <span className="font-medium">automated test frameworks</span>, as well as 
            <span className="font-medium">API</span> and <span className="font-medium">performance testing</span>.
            Proficient with tools such as <span className="italic">JMeter, Postman,</span> and 
            <span className="italic">GitHub Actions (CI/CD)</span>. Adept at implementing 
            <span className="font-medium">end-to-end testing strategies</span>, writing clean and efficient test scripts, 
            and ensuring high-quality software delivery through thorough validation and 
            continuous integration practices.
         </p>

      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Work Experience</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality Assurance Engineer</h3>
          <p className="text-blue-600 text-xl mb-2">Atlas Computer Technology PLC</p>
          <p className="text-gray-600 mb-4">Nov 2024 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>
              Conduct comprehensive manual and automated testing to ensure software quality and
              performance.
            </li>
            <li>Test RESTful APIs using Postman and verify seamless communication with integrators.</li>
            <li>Contribute to the deployment and testing of applications on platforms like WildFly.</li>
          </ul>
        </div>
      </section>

      {/* Academic History */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Academic History</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-blue-600 text-xl mb-2">Gondar University</p> {/* Assuming Gondar based on previous info */}
          <p className="text-gray-600 mb-2">GPA: 3.72</p>
          <p className="text-gray-600">Preparatory School | 2017-2018</p>
        </div>
      </section>
    </div>
  );
}