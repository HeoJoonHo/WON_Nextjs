import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Welcome to JoonHo's First Post!</h1>
      <h2>Name: JoonHo Her (허준호)</h2>
      <h3>Blood Type: AB</h3>
      <h3>Residence: Bucheon-si</h3>
      <h3>Hobby: Game, Video Editing, Listening to Music</h3>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}