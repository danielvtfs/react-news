import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>hOME | react news</title>
      </Head>

      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for R$9,90</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="coding" />
      </main>
    </>
  );
}
