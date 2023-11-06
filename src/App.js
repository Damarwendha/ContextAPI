import { OrangProvider, useOrang } from "./contexts/OrangProvider";

export default function App() {
  return (
    <OrangProvider>
      <KonsumerOrang />
    </OrangProvider>
  );
}

function KonsumerOrang() {
  const { namaPanggilan, updateNamaPanggilan } = useOrang();

  return (
    <p onClick={() => updateNamaPanggilan("Wendha")}> Tes, {namaPanggilan}</p>
  );
}
