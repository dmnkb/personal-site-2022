import { FC } from "react";
import Head from "next/head";

interface MetaProps {
  pageTitle: string;
}

const Meta: FC<MetaProps> = ({ pageTitle }) => {
  const BASE_TITLE = "Dominik Borchert | Creative Developer";

  return (
    <Head>
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      {/* prettier-ignore */}
      <link rel="manifest" href="favicon/site.webmanifest" />
      {/* prettier-ignore */}
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#7b61ff" />
      {/* prettier-ignore */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/* prettier-ignore */}
      <meta name="theme-color" content="#F6B5C7" />
      <title>{`${BASE_TITLE} | ${pageTitle}`}</title>
      <meta
        name="description"
        content="Hi, I'm Dominik. I'm a Germany-located creative developer currently fighting the
          climate crisis at Lichtblick."
      />
      <link rel="canonical" href="https://www.borchert.me" />
    </Head>
  );
};

export default Meta;
