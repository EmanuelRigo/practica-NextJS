import Link from "next/link";

export const metadata = {
  title: "Tienda oficial",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">computadoras</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}
