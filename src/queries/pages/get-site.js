/* eslint-disable linebreak-style */
import { gql } from '@apollo/client';

/**
 * Get site settings.
 *
 */
export const GET_SITE = gql`
 query GET_SITE {
    allSettings {
      generalSettingsLanguage
      generalSettingsTitle
      generalSettingsUrl
      generalSettingsTimezone
    }
  }
 `;
