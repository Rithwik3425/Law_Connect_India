import { useEffect } from "react";

function Lawyer() {
  const [lawyer, setLawyer] = useState({});

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch("/api/Lawyers");
        const data = await response.json();
        setLawyer(data);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);
  return (
    <div>
      <h1>Lawyers</h1>
      {lawyer.map((lawyer) => (
        <div key={lawyer._id}>
          <h2>{lawyer.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Lawyer;
