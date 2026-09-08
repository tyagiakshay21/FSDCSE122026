import pic from "../images/image.jpeg";

function ICard({data}) {
  return (
    <div
      style={{
        border: "5px solid black",
        height: "600px",
        width: "800px",
      }}
    >
      <img src={pic} height={50} width={50} />


      <h1 style={{ color: "green", fontSize: "20px" }}>Name: {data.name}</h1>
      <h1 style={{ color: "blue", fontSize: "20px" }}>Roll no: {data.roll}</h1>
      <h1 style={{ color: "maroon", fontSize: "20px" }}>Branch: {data.branch}</h1>
      <h1 style={{ color: "gray", fontSize: "20px" }}>College: {data.college}</h1>
    </div>
  );
}

export default ICard;