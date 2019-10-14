import React, { useState } from 'react';

import { usePageTitle } from './use-page-title';

const withPageTitle = (title = false) => {
  const PageTitle = Component => {
    return props => {
      // Used to store provided page titles
      const [pageTitle, setPageTitle] = useState(false);

      // Use page title hook to change doc title
      usePageTitle(pageTitle ? pageTitle : title);

      return <Component setPageTitle={setPageTitle} {...props} />;
    };
  };

  return PageTitle;
};

export default withPageTitle;
