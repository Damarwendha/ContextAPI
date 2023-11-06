import { createContext, useContext, useReducer } from "react";

const OrangContext = createContext();

const initialState = {
  namaPanggilan: "",
  usia: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "orang/updateNamaPanggilan":
      return { ...state, namaPanggilan: action.payload };
    case "orang/updateUsia":
      return { ...state, usia: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function OrangProvider({ children }) {
  const [{ namaPanggilan, usia }, dispatch] = useReducer(reducer, initialState);

  // semua dispatch yang ada di reducer
  function updateNamaPanggilan(namaPanggilan) {
    dispatch({ type: "orang/updateNamaPanggilan", payload: namaPanggilan });
  }

  function updateUsia(usia) {
    dispatch({ type: "orang/updateUsia", payload: usia });
  }

  const value = {
    namaPanggilan,
    usia,
    updateNamaPanggilan,
    updateUsia
  };

  return (
    <OrangContext.Provider value={value}>{children}</OrangContext.Provider>
  );
}

function useOrang() {
  const context = useContext(OrangContext);
  if (!context)
    throw new Error("OrangContext telah dipakai diluar area OrangProvider");
  return context;
}

export { OrangProvider, useOrang };
