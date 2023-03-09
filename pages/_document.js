import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
        <Head>
                <meta charSet='UFT-8' />
                <meta name='viewport' content="width=device-width, initial-scale=1.0" />
                <meta content="" name="title"/>
                <meta content="" name="description"/>
                <meta content="" name="keywords"/>
                <link href="/assets/img/favicon.png" rel="icon"/>
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="/assets/vendor/swiffy/swiffy-slider.min.css" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}
