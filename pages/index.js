import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1>React Tasks</h1>
        <p>
          For each task complete what is requested, but also try to think all
          improvements that you can think of. In both tasks try to provide nice
          styling.
        </p>
        <h3>Create a registration form</h3>
        <ul>
          <li>
            create a mocked async function <code>login</code> to accept the
            following payload: <code>email, name</code> and{' '}
            <code>password</code>. Mock response for different status codes: 200
            or 400 (maybe even 500)
          </li>
          <li>create a vanilla React form for those fields</li>
          <li>use UI to handle different API responses</li>
          <li>
            pay attention to the look and feel (labels, placeholders, loaders
            ... )
          </li>
        </ul>
        <h2 />
        <h3>
          Create Next.js page <code>/planets</code>{' '}
        </h3>
        <ul>
          <li>
            Render planet list from <code>https://swapi.dev/api/planets</code>{' '}
            API
          </li>
          <li>
            Each of the planet item should have a dummy planet image and some
            info (name, climate, number of residents, etc.)
          </li>
          <li>
            Add search input to filter by planet name (look for API
            documentation using query parameters)
          </li>
          <li>Add page pagination</li>
          <li>
            Use some techniques for performant behaviour and efficient data
            loading
          </li>
          <li>
            Make site user friendly for desktop and mobile (use your creativity
            :) )
          </li>
        </ul>
        <p>
          For planet card use this placeholder image:{' '}
          <code>
            https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg
          </code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
