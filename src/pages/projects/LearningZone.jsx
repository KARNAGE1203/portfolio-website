import ProjectPage from './ProjectPage'

export default function LearningZone() {
  return (
    <ProjectPage
      number="01"
      name="LearningZone Redesign"
      description="Full stack redesign of DMU's student portal."
      role="Solo Designer & Developer"
      timeline="May–June 2026"
      type="Full Stack + UX Research"
      stack={['React', 'TypeScript', 'Node.js', 'Express', 'SQLite']}
      heroImage="/img/LearningZone Redesign Screenshots/Dashboard Page.png"
      primaryLink={{ label: 'View on Behance', href: 'https://www.behance.net/gallery/250928899/LearningZone-Redesign-Project' }}
      secondaryLink={{ label: 'View on GitHub', href: 'https://github.com/KARNAGE1203/LearningZone-Redesign-Project' }}
      problem="De Montfort University's LearningZone platform is the central hub for every student — courses, assignments, deadlines, grades, and support all live there. But the experience it delivers does not match that responsibility. Navigation is inconsistent and unintuitive. Visual hierarchy gives no clear signal about what matters. Key actions require too many steps to complete. As a first-year student using it daily, I experienced these failures firsthand. So I decided to fix them."
      process={[
        { number: '01', title: 'Research', description: 'Student interviews, heuristic evaluation, pain point mapping.' },
        { number: '02', title: 'Design', description: 'Lo-fi wireframes, design system, hi-fi screens in Figma.' },
        { number: '03', title: 'Build', description: 'React frontend, Node.js API, JWT authentication, SQLite database, deployed across Netlify and Render.' },
      ]}
      screenshots={[
        { src: '/img/LearningZone Redesign Screenshots/Dashboard Page.png', alt: 'LearningZone dashboard' },
        { src: '/img/LearningZone Redesign Screenshots/Home Page.png', alt: 'LearningZone home page' },
        { src: '/img/LearningZone Redesign Screenshots/Course Info Page.png', alt: 'LearningZone course page' },
        { src: '/img/LearningZone Redesign Screenshots/Grades Page.png', alt: 'LearningZone grades page' },
      ]}
      techStack={{
        frontend: ['React', 'TypeScript', 'Vite', 'Netlify'],
        backend: ['Node.js', 'Express', 'JWT Authentication', 'SQLite', 'Prisma ORM', 'Render'],
      }}
      decisions={[
        {
          title: 'Urgency-first dashboard',
          description: 'Designed the dashboard to answer one question first: what does this student need to do right now? Every element is prioritised by urgency not category.',
        },
        {
          title: 'A real backend',
          description: 'Built a real backend with JWT authentication instead of a static prototype because the project needed to prove it could actually work, not just look like it could.',
        },
        {
          title: 'Evolution, not replacement',
          description: "Kept the colour system close to DMU's existing purple palette so the redesign felt like an evolution not a replacement.",
        },
      ]}
      reflection={[
        'Building the backend changed how I think about design. When you understand how data flows through an API, you stop designing things that are impossible to build.',
        'This project started as a student complaint and ended as a deployed full stack application. That gap is exactly the space I want to work in.',
      ]}
      nextProject={{ name: 'FindMyTutor', slug: 'findmytutor' }}
    />
  )
}
