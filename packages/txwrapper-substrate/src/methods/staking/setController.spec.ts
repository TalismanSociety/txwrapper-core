import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setController } from './setController';

describe('staking::setController', () => {
	it('should work', () => {
		const unsigned = setController(
			TEST_METHOD_ARGS.staking.setController,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x0608008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'
		);
	});
});
