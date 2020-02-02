import React from 'react';
import Helmet from 'react-helmet';

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <>
        <Helmet titleTemplate="%s | CodesThings.com" defaultTitle="CodesThings.com">
          <meta charSet="utf-8" />
          <title>Home</title>
          <meta
            name="description"
            content="CodesThings.com, the professional profile of James Macmillan (@JamesCodesThings)"
          />
          <link rel="canonical" href="https://codesthings.com" />
        </Helmet>
      </>
    );
  }
}
