import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // useCallback avoid recreate the function all the time
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // same as componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // same as componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // useMemo changes only when the target variables in arrays changes
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
