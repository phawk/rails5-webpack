import "highlight.js/styles/github-gist.css";
import "reveal/index.css";
import "styles/main.scss";

import Reveal from 'reveal/index.js';
import hljs from 'highlight.js';

const version = "0.1.0";

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  // default/cube/page/concave/zoom/linear/fade/none
  transition: 'none',
});

hljs.initHighlightingOnLoad();