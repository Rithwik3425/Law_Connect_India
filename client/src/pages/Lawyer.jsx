import { useEffect } from "react";

function Lawyer() {
  const [lawyer, setLawyer] = useState({});

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch("/api/Lawyers", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setLawyer(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);

  return (
    <div>
      <h1>{lawyer}</h1>
    </div>
  );
}

export default Lawyer;
