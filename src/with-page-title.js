import React from 'react';

import {usePageTitle} from "./use-page-title"

const withPageTitle = (title = false) => {
  const PageTitle = Component => {
    // Used to store provided page titles
    const [pageTitle, setPageTitle] = useState(false);

    // Use page title hook to change doc title
    usePageTitle(pageTitle ? pageTitle : title)

    return props => {
      return <Component setPageTitle={} {...props} />;
    }
  }

  return PageTitle;
};

export default withPageTitle;