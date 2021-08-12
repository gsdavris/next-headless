import client from '../apollo/client';
import {GET_PAGE_BY_ID} from '../queries/pages/get-page';
import LOGIN from '../mutations/login';
import SEND_EMAIL from '../mutations/sendMail';
import { v4 } from 'uuid';

export async function getPreviewPage( id ) {

	const { data, errors } = await client.query( {
		query: GET_PAGE_BY_ID,
		variables: {
			id: Number( id ),
		},
	} );

	return data || {};
}

export async function loginUser( {username, password} ) {

	const { data, errors } = await client.query( {
		query: LOGIN,
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id
				username: username || '',
				password: password || '',
			},
		},
	} );

	return data || {};
}


export async function sendMail( {email, name, message} ) {

	const { data, errors } = await client.query( {
		query: SEND_EMAIL,
		variables: {
			input: {
				subject: `New message from ${name}`,
				body: `New message from:${name} email:${email} message:${message}`,
				clientMutationId: v4(), // Generate a unique id
			}
		},
	} );

	return data.sendEmail || {};
}
