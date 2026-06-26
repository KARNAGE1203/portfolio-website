import ProjectPage from './ProjectPage'
import FindMyTutorScreens from './FindMyTutorScreens'

export default function FindMyTutor() {
  return (
    <ProjectPage
      number="02"
      name="FindMyTutor"
      description="End-to-end UX case study for a tutor scheduling app."
      role="UX Designer"
      timeline="April–May 2026"
      type="UX Research + UI Design"
      stack={['Figma', 'UX Research', 'Design Systems', 'Prototyping']}
      heroImage="/img/FindMyTutor Screenshots/TopImage.webp"
      primaryLink={{ label: 'View on Behance', href: 'https://www.behance.net/gallery/250146041/FindMyTutor-A-Tutor-Scheduling-App' }}
      secondaryLink={null}
      problem="Finding a tutor is fragmented — parents search across platforms, text friends for recommendations, and still end up with someone unvetted. Students have no reliable way to discover, evaluate, and book a tutor in one place."
      process={[
        { number: '01', title: 'Research', icon: 'search', description: 'User personas, pain point mapping, competitive analysis of existing tutoring platforms.' },
        { number: '02', title: 'Wireframes', icon: 'edit', description: 'Lo-fi wireframes across 6 screens establishing navigation logic and content hierarchy.' },
        { number: '03', title: 'Hi-Fi', icon: 'eye', description: 'Design system defined first, then hi-fi screens built on top. Clickable prototype published on Behance.' },
      ]}
      customGallery={<FindMyTutorScreens />}
      techStack={null}
      decisions={[
        {
          title: 'Group time slots by period',
          icon: 'clock',
          description: 'Grouped time slots by Morning, Afternoon, Evening instead of showing a flat list of 16 time slots. Reduces cognitive load at the moment of commitment.',
        },
        {
          title: 'Trust before action',
          icon: 'shield',
          description: 'Structured the Tutor Profile to build trust before asking for action — credentials, reviews, and bio before the booking CTA.',
        },
        {
          title: 'Drive the next action',
          icon: 'arrow-right-circle',
          description: 'Designed the Booking Confirmation screen to drive next action rather than dead-end the user. Add to Calendar is the primary CTA, not Back to Home.',
        },
      ]}
      reflection={[
        'This was my first end-to-end UX case study — from identifying a real problem through research to a clickable hi-fi prototype.',
        'The biggest lesson was that information architecture decisions made in lo-fi are nearly impossible to fix in hi-fi. Get the structure right before touching colour or typography.',
      ]}
      nextProject={{ name: 'Little Lemon Restaurant', slug: 'littlelemon' }}
    />
  )
}
