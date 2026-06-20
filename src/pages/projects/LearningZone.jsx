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
        { number: '01', title: 'Research', icon: 'search', description: 'Student interviews, heuristic evaluation, pain point mapping.' },
        { number: '02', title: 'Design', icon: 'edit', description: 'Lo-fi wireframes, design system, hi-fi screens in Figma.' },
        { number: '03', title: 'Build', icon: 'code', description: 'React frontend, Node.js API, JWT authentication, SQLite database, deployed across Netlify and Render.' },
      ]}
      researchFindings={{
        findings: [
          {
            persona: 'A first-year Computer Science student',
            quote: 'I have to click through three separate pages just to check what assignments are due.',
            context: 'Students consistently described deadlines as buried. The portal surfaced no urgency indicators on the dashboard — finding due dates required active, multi-step navigation.',
          },
          {
            persona: 'A second-year Engineering student',
            quote: "The grades page doesn't tell me which submission is bringing my average down.",
            context: 'Grade details required navigating into each course individually. No summary or weighted view existed at the dashboard level, making it hard to prioritise revision.',
          },
          {
            persona: 'A first-year student, two weeks into term',
            quote: "Half the icons in the navigation didn't mean anything to me for the first two weeks.",
            context: 'Several portal modules used icon-only navigation without text labels or tooltips, forcing trial and error. New students faced a steep, undocumented learning curve.',
          },
        ],
        heuristics: [
          { heuristic: '1 — Visibility of System Status', violation: 'No indication of upcoming deadlines or pending submissions on the dashboard without 3+ clicks.' },
          { heuristic: '4 — Consistency and Standards', violation: 'Navigation patterns differed between modules — tabs in one area, dropdowns in another, inline links elsewhere.' },
          { heuristic: '6 — Recognition Over Recall', violation: 'Icon-only navigation in key areas forced users to memorise destinations rather than recognise them.' },
          { heuristic: '7 — Flexibility and Efficiency', violation: 'No quick-access paths for frequent tasks such as checking grades or downloading course materials.' },
          { heuristic: '8 — Aesthetic and Minimalist Design', violation: 'Dashboard prioritised generic announcements over time-sensitive academic information.' },
        ],
      }}
      wireframes={[
        {
          label: 'Dashboard',
          lofi: '/img/LearningZone Redesign Screenshots/Dashboard_Lofi.png',
          hifi: '/img/LearningZone Redesign Screenshots/Dashboard Page.png',
        },
        {
          label: 'Home',
          lofi: '/img/LearningZone Redesign Screenshots/Home_Lofi.png',
          hifi: '/img/LearningZone Redesign Screenshots/Home Page.png',
        },
        {
          label: 'Course Info',
          lofi: '/img/LearningZone Redesign Screenshots/Course Info_Lofi.png',
          hifi: '/img/LearningZone Redesign Screenshots/Course Info Page.png',
        },
      ]}
      beforeAfter={[
        { before: '4 clicks to view assignment grades', after: '1 click — grade summary visible on dashboard load' },
        { before: 'No deadline visibility on the landing screen', after: 'Upcoming deadlines surfaced as urgency cards, sorted by date' },
        { before: 'Icon-only navigation with no text labels in key areas', after: 'Labelled sidebar with clear hierarchy and active state indicators' },
        { before: 'Course materials buried two levels inside each module', after: 'Quick-access panel on course home, primary materials surfaced directly' },
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
          icon: 'target',
          description: 'Designed the dashboard to answer one question first: what does this student need to do right now? Every element is prioritised by urgency not category.',
        },
        {
          title: 'A real backend',
          icon: 'database',
          description: 'Built a real backend with JWT authentication instead of a static prototype because the project needed to prove it could actually work, not just look like it could.',
        },
        {
          title: 'Evolution, not replacement',
          icon: 'refresh',
          description: "Kept the colour system close to DMU's existing purple palette so the redesign felt like an evolution not a replacement.",
        },
      ]}
      outcome={{
        stats: [
          { value: '6', label: 'Student interviews conducted during the research phase' },
          { value: '2', label: 'Independent services in production — React frontend (Netlify) and Node.js API (Render)' },
          { value: '5', label: 'Nielsen heuristics violated in the original portal, addressed in the redesign' },
        ],
        note: 'Several classmates who tested the prototype described it as more intuitive and genuinely useful compared to the live portal. No formal A/B test was conducted — this was a student-led project with real deployment.',
      }}
      reflection={[
        'Building the backend changed how I think about design. When you understand how data flows through an API, you stop designing things that are impossible to build.',
        'This project started as a student complaint and ended as a deployed full stack application. That gap is exactly the space I want to work in.',
      ]}
      nextProject={{ name: 'FindMyTutor', slug: 'findmytutor' }}
    />
  )
}
