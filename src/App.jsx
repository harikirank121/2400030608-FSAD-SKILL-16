import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [selected, setSelected] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div>
      <AddStudent
        refresh={refresh}
        selected={selected}
        setSelected={setSelected}
      />

      <StudentList
        setSelected={setSelected}
        refreshFlag={refreshFlag}
      />
    </div>
  );
}

export default App;