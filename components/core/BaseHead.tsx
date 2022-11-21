import Head from "next/head";
import "~/components/config";
import { SITE } from "~/components/config";

export default function BaseHead() {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
      </Head>
    </>
  );
}
