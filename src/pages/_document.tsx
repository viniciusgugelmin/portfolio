import { Head, Html, Main, NextScript } from "next/document";
import { getAge } from "../utils/getAge";
import { LanguageTypes } from "../types/Language/LanguageType";

export default function Document() {
  return (
    <Html
      lang={process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as LanguageTypes.Language}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Sup, everyone! I'm ${
            process.env.NEXT_PUBLIC_AUTHOR_FIRST_NAME
          }, but you can call me ${
            process.env.NEXT_PUBLIC_AUTHOR_NICKNAME
          }. I'm ${getAge({
            birthDate: new Date(
              process.env.NEXT_PUBLIC_AUTHOR_BIRTHDATE as string
            ),
          })} years old and I'm a ${
            process.env.NEXT_PUBLIC_AUTHOR_PROFESSION
          }. I'm from ${
            process.env.NEXT_PUBLIC_AUTHOR_COUNTRY
          } and I'm currently living in ${
            process.env.NEXT_PUBLIC_AUTHOR_LOCATION
          }. I'm passionate about technology and I'm always looking for new challenges. I'm currently working as a ${
            process.env.NEXT_PUBLIC_AUTHOR_ROLE
          } at ${process.env.NEXT_PUBLIC_AUTHOR_COMPANY}.`}
        />
        <meta name="author" content={process.env.NEXT_PUBLIC_AUTHOR_NAME} />
        <meta
          name="keywords"
          content="portfolio, developer, web developer, front-end developer, back-end developer, full-stack developer, software developer, software engineer, web developer portfolio, front-end developer portfolio, back-end developer portfolio, full-stack developer portfolio, software developer portfolio, software engineer portfolio, portfolio website, react, vue, angular, node"
        />
      </Head>
      <body className="bg-accent-6 dark:bg-accent-1 dark:text-accent-6 transition-colors vkg-transition">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
