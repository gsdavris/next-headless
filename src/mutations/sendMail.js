/* eslint-disable linebreak-style */
import { gql } from '@apollo/client';

const SEND_EMAIL = gql`
mutation SEND_EMAIL( $input: SendEmailInput! ) {
  sendEmail(input: $input)
  {
    origin
    sent
    message
  }
}`;

export default SEND_EMAIL;

