import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Provider } from "react-redux";
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import Index from "../imports/ui/components/layout/index";
import configureStore from "../imports/ui/store/configure_store";

import '../imports/api/Posts/methods';

const store = configureStore();

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById('react-wstore')
  );
});
