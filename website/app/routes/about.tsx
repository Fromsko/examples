import AboutMe from '~/common/AboutMe'
import { TypingAnimationDemo } from '~/common/TypingAnimation'
import type { Route } from './+types/about'

export function loader({ context }: Route.LoaderArgs) {
  return { message: 'This is the about page' }
}

export function meta({ }: Route.MetaArgs) {
  return [{ title: 'About Us' }, { name: 'description', content: 'Learn more about our company.' }]
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <TypingAnimationDemo/>
      <section className="selection-lay">
        <AboutMe />
      </section>
    </>
  )
}
