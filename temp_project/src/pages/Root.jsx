import { Link } from 'react-router-dom';
export default function Root() {

  return (
    <>
      <section>
        <h2>Template for Project</h2>
      </section>

      <section>
        <ul>
          <li><Link to='/route1'>Route 1</a></li>
          <li><Link to='/route2'>Route 2</a></li>
        </ul>
      </section>
    </>
  )
}

