import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";

export default function Home() {
  return (
    <ContainerBlock
      title="Cristian Canossini - Webdesign, Grafica e Rendering"
      description="Creo siti, curo grafiche e realizzo rendering"
    >
      <div className="text-gray-500 text-sm">
        <br/>
        <br/>
        <br/>
        In lavorazione...
        <br/>
        <br/>
        <br/>
      </div>
    </ContainerBlock>
  );
}
