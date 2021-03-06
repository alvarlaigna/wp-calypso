/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import reducer from 'woocommerce/state/sites/reducer';
import { LOADING } from 'woocommerce/state/constants';
import {
	WOOCOMMERCE_SETTINGS_GENERAL_REQUEST,
	WOOCOMMERCE_SETTINGS_GENERAL_REQUEST_SUCCESS,
} from 'woocommerce/state/action-types';

describe( 'reducer', () => {
	it( 'should mark the settings general tree as "loading"', () => {
		const siteId = 123;
		const action = {
			type: WOOCOMMERCE_SETTINGS_GENERAL_REQUEST,
			siteId,
		};

		const newSiteData = reducer( {}, action );
		expect( newSiteData[ siteId ].settings.general ).to.eql( LOADING );
	} );

	it( 'should store data from the action', () => {
		const siteId = 123;
		const settings = [
			{},
			{},
		];
		const action = {
			type: WOOCOMMERCE_SETTINGS_GENERAL_REQUEST_SUCCESS,
			siteId,
			data: settings,
		};
		const newState = reducer( {}, action );
		expect( newState[ siteId ] ).to.exist;
		expect( newState[ siteId ].settings ).to.exist;
		expect( newState[ siteId ].settings.general ).to.deep.equal( settings );
	} );
} );
