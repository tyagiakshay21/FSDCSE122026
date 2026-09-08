import ICard from "./ICard";

function Gallery() {
  const students = [
    {
      name: "Divyam",
      roll: "437",
      branch: "CSE",
      college: "ABESEC",
    },
    {
      name: "Akhil",
      roll: "130",
      branch: "CSE",
      college: "ABESEC",
    },
    {
      name: "Akshay",
      roll: "139",
      branch: "CSE",
      college: "ABESEC",
    },
  ];

  return (
    <div
      style={{
        border: "2px solid red",
        margin:"50px",
        padding:"50px",
        display: "flex",
        gap: "10px",
      }}
    >
      {students.map((student) => (
        <ICard data={student} />
      ))}
    </div>
  );
}

export default Gallery;