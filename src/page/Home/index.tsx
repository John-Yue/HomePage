import { useEffect, useState } from "react";

function Home() {
  const [test, setTest] = useState<number>(1);

  useEffect(() => {
    setTest(2)
  }, []);

  return (
    <div>
      <h1>我就试试{test}</h1>
    </div>
  )
}

export default Home;
