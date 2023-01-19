import {suite} from 'uvu';
import * as assert from 'uvu/assert';
import * as cf from '../src';

const API = suite('exports');

API('should export an object', () => {
	assert.type(cf, 'object');
});

API.run();
