import DOMPurify from 'dompurify';
import marked from 'marked';

export function parseMarkdown(md) {
	const html = marked(md);
	return DOMPurify.sanitize(html);
}
