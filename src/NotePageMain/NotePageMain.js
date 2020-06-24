import React from 'react';
import Note from '../Note/Note';
import './NotePageMain.css';
import NoteContext from '../NoteContext';

export default class NotePageMain extends React.Component {
  static contextType = NoteContext;
  render() {
    const { notes } = this.context;
    return (
      <NoteContext.Consumer>
        {(value) => (
          <section className="NotePageMain">
            <Note id={notes.id} name={notes.name} modified={notes.modified} />
            <div className="NotePageMain__content">
              {notes.content.split(/\n \r|\n/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}
      </NoteContext.Consumer>
    );
  }
}
