import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

if (Meteor.settings.private && Meteor.settings.private.OAuth) {
  const OAuthSettings = Meteor.settings.private.OAuth;

  Object.keys(OAuthSettings).forEach((service) => {
    ServiceConfiguration.configurations.upsert({ service }, { $set: OAuthSettings[service] });
  });
} else {
  console.warn(
    '[WARN] Woof! OAuth settings are not configured'
  );
}
