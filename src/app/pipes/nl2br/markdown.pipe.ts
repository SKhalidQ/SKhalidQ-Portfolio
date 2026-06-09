import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'markdown' })
export class MarkdownPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined): SafeHtml {
    if (!value) {
      return '' as unknown as SafeHtml;
    }

    const out = String(value)
      // Headers (h1 through h6)
      .replace(/^#{6}\s+(.*)$/gm, '<h6>$1</h6>')
      .replace(/^#{5}\s+(.*)$/gm, '<h5>$1</h5>')
      .replace(/^#{4}\s+(.*)$/gm, '<h4>$1</h4>')
      .replace(/^#{3}\s+(.*)$/gm, '<h3>$1</h3>')
      .replace(/^#{2}\s+(.*)$/gm, '<h2>$1</h2>')
      .replace(/^#{1}\s+(.*)$/gm, '<h1>$1</h1>')

      // Text formatting
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/__(.*?)__/g, '<u>$1</u>') // Underline
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/~~(.*?)~~/g, '<del>$1</del>') // Strikethrough
      .replace(/`([^`]+)`/g, '<code>$1</code>') // Inline code

      // Links and images
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>') // Links
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">') // Images

      // Lists
      .replace(/^\s*[-*+]\s+(.*)$/gm, '<li>$1</li>') // Unordered list items
      .replace(/^\s*(\d+)\.\s+(.*)$/gm, '<li>$2</li>') // Ordered list items
      .replace(/(<li>[^<]*<\/li>)\s*(?=<li>)/g, '$1') // Group consecutive list items

      // Blockquotes
      .replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>')

      // Line breaks (keep last to avoid interference)
      .replace(/<br>/gi, '<br/><br/>'); // Double line breaks

    // Wrap lists in appropriate containers
    const withLists = out
      .replace(/(<li>[^<]*<\/li>)+/g, (match) => {
        // Check if the list items are numbered
        return match.includes('. ')
          ? `<ol>${match}</ol>`
          : `<ul>${match}</ul>`;
      });

    // Return SafeHtml so we can bind with [innerHTML]
    return this.sanitizer.bypassSecurityTrustHtml(withLists);
  }
}
