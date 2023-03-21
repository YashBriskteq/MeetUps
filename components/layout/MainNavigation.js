import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
