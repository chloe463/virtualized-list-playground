import {
  Link
} from "react-router-dom";

interface Props {
  urls: string[];
}

export function Nav(props: Props) {
  return (
    <nav>
      <ul>
        {props.urls.map((url) => {
          return (
            <li key={url}>
              <Link to={url}>
                {url}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
