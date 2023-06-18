import { FunctionComponent } from 'react'
import classes from "./footer.module.scss"
import packageJson from '../../../package.json'

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.footer} data-cy="footer">
      <ul>
        <li className={classes.footerLinks}>
          <a
            href="https://twitter.com/mihailgaberov"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="twitterLink"
          >
            twitter
          </a>{" "}
          &bull;{" "}
          <a
            href="https://github.com/mihailgaberov"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="githubLink"
          >
            github
          </a>
        </li>
        <li className={classes.footerCopyrights}>
          © {packageJson.author} {currentYear}. All rights reserved.
        </li>
        <li>
          <div className={classes.version}>v.{packageJson.version}</div>
        </li>
      </ul>
    </footer>
  )
}
