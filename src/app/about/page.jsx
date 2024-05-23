"use client";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Acerca de nosotros - FaztWeb",
// };

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        inventore, ipsum eaque ratione nobis sint. Fugiat alias itaque quae,
        laborum quisquam assumenda beatae praesentium sequi ad adipisci.
        Deserunt itaque quas distinctio fugiat inventore maiores dolore ullam
        voluptatem voluptatum hic repellat a officia sit, voluptate laboriosam
        impedit expedita quo dicta obcaecati animi eos fugit cupiditate
        repellendus. Quae non nam mollitia explicabo iure velit labore
        laboriosam, adipisci harum obcaecati placeat ipsa eos deserunt eius
        blanditiis voluptas nostrum recusandae saepe quod ut libero quis itaque!
        Repudiandae, maxime quo! Fuga, voluptatem dolorem omnis eos placeat
        debitis, quisquam voluptatum vel numquam labore voluptatibus
        consequuntur sint.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("executing code!!!");
          router.push("/");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default About;
