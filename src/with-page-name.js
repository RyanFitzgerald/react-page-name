import React, { useState } from 'react';

import { usePageName } from './use-page-name';

const withPageName = (name = false) => {
  const PageName = Component => {
    return props => {
      // Used to store provided page names
      const [pageName, setPageName] = useState(false);

      // Use page name hook to change doc title
      usePageName(pageName ? pageName : name);

      return <Component setPageName={setPageName} {...props} />;
    };
  };

  return PageName;
};

export default withPageName;
