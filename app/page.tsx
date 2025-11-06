// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 animate-fade-in">
          Biniyam Nahusenay
        </h1>
      <p className="text-2xl text-blue-600 mb-8 animate-fade-in delay-200">
        QA Engineer | SDET | Automation Tester | CI/CD Enthusiast
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 animate-fade-in delay-400">
        Welcome to my personal portfolio! I&apos;m passionate about ensuring software quality,
        automating processes, and building robust CI/CD pipelines. Explore my work and skills.
      </p>
      <Link
        href="/BINIYAMQaResume.pdf" // Placeholder for your resume file
        download
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in delay-600"
      >
        Download Resume
      </Link>
    </div>
  );
}