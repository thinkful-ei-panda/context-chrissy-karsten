import React from 'react';
import dummyStore from '../src/dummy-store';

const NoteContext = React.createContext({
  dummyStore,
});

export default NoteContext;
