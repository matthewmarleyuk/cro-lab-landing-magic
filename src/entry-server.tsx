
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  try {
    console.log(`Server rendering: ${url}`);
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    
    return html;
  } catch (error) {
    console.error(`Error rendering ${url}:`, error);
    return `<!-- Error rendering ${url}: ${error} -->`;
  }
}
