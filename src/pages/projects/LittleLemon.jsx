import ProjectPage from './ProjectPage'

export default function LittleLemon() {
  return (
    <ProjectPage
      number="03"
      name="Little Lemon Restaurant"
      description="Multi-page React web app — menu, reservations, cart, order tracking."
      role="Frontend Developer"
      timeline="May 2026"
      type="Frontend Development"
      stack={['React', 'JavaScript', 'CSS', 'React Router']}
      heroImage="/img/LittleLemon Screenshots/Home Page.png"
      primaryLink={{ label: 'View Live Site', href: 'https://littlelemonrestaurantproj.netlify.app' }}
      secondaryLink={{ label: 'View on GitHub', href: 'https://github.com/KARNAGE1203/little-lemon-restaurant' }}
      problem="The Meta Frontend Development course needed a capstone that demonstrated component architecture, state management, routing, and responsive design working together in a real application."
      process={[
        { number: '01', title: 'Design', icon: 'edit', description: 'UI designed with UX principles first. Information hierarchy, navigation flow, and component logic planned before writing code.' },
        { number: '02', title: 'Build', icon: 'code', description: 'React 18 with component-based architecture, Context API for cart state, React Router for navigation.' },
        { number: '03', title: 'Deploy', icon: 'send', description: 'Deployed live on Netlify with automatic GitHub deploys on every push.' },
      ]}
      screenshots={[
        { src: '/img/LittleLemon Screenshots/Home Page.png', alt: 'Little Lemon home page' },
        { src: '/img/LittleLemon Screenshots/Menu Page.png', alt: 'Little Lemon menu page' },
        { src: '/img/LittleLemon Screenshots/Table Reservation.png', alt: 'Little Lemon reservation page' },
        { src: '/img/LittleLemon Screenshots/Cart.png', alt: 'Little Lemon cart page' },
      ]}
      techStack={{
        frontend: ['React 18', 'JavaScript', 'CSS3', 'Context API', 'React Router', 'Netlify'],
        backend: null,
      }}
      decisions={[
        {
          title: 'Context over prop drilling',
          icon: 'layers',
          description: 'Used Context API instead of prop drilling for cart state so any component in the tree can access and update cart without passing props through intermediaries.',
        },
        {
          title: 'Reusable components',
          icon: 'grid',
          description: 'Built reusable components for menu items, cards, and form elements so adding new content requires zero layout changes.',
        },
        {
          title: 'Mobile-first',
          icon: 'smartphone',
          description: 'Designed mobile-first and scaled up, not the other way around — most restaurant browsing happens on phones.',
        },
      ]}
      reflection={[
        'Little Lemon proved that design decisions and development decisions are the same decision made at different stages.',
        'Every component I built, I had already designed. Every layout choice I coded, I had already justified. That is the hybrid workflow I want to bring to every project.',
      ]}
      nextProject={{ name: 'LearningZone Redesign', slug: 'learningzone' }}
    />
  )
}
