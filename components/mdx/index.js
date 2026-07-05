// This is the "phone book" that tells next-mdx-remote which React
// component to use whenever it sees a given tag name inside an .mdx
// file. Add a new row here any time you build a new callout type —
// no other file needs to change.
import Definition from './Definition/Definition';
import Example from './Example/Example';
import CaseLaw from './CaseLaw/CaseLaw';
import Note from './Note/Note';

export const mdxComponents = {
  Definition,
  Example,
  CaseLaw,
  Note,
};