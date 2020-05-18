import React from 'react';
import marked from 'marked';

import './styles.css';

interface FormattedText {
  __html: string;
}

const Previewer: React.FunctionComponent<{}> = () => {
  const getFormattedText = (): FormattedText => {
    const rawMarkup = marked('# This is _Markdown_.', { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="Previewer">
      <div className="Editor">
        <textarea id="editor"></textarea>
      </div>
      <div className="Viewer">
        <div id="preview" dangerouslySetInnerHTML={getFormattedText()} />
      </div>
    </div>
  );
};

export default Previewer;
