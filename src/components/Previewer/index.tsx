import React, { useState, FunctionComponent } from 'react'
import marked from 'marked'

import './styles.css'

const DEFAULT_TEXT = `
# Marked - Markdown Parser
## Marked - Markdown Parser

\`this is a code snippet\`

\`\`\`
This is a block code
yes
yes
yes
\`\`\`


[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`

interface FormattedText {
  __html: string
}

const Previewer: FunctionComponent = () => {
  const [editorContent, setEditorContent] = useState(DEFAULT_TEXT)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEditorContent(event.target.value)
  }

  const getFormattedText = (): FormattedText => {
    const rawMarkup = marked(editorContent, { sanitize: true, breaks: true })
    return { __html: rawMarkup }
  }

  return (
    <div className="Previewer">
      <div className="Editor">
        <textarea id="editor" name="text-area" value={editorContent} onChange={handleChange}></textarea>
      </div>
      <div className="Viewer">
        <div id="preview" dangerouslySetInnerHTML={getFormattedText()} />
      </div>
    </div>
  )
}

export default Previewer
