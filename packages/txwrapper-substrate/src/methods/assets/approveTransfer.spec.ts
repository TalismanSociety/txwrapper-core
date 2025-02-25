import {
	itHasCorrectBaseTxInfo,
	STATEMINE_TEST_OPTIONS,
	STATEMINT_TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { approveTransfer } from './approveTransfer';

describe('assets:approveTransfer', () => {
	it('should work', () => {
		const unsigned = approveTransfer(
			TEST_METHOD_ARGS.assets.approveTransfer,
			STATEMINT_TEST_BASE_TX_INFO,
			STATEMINE_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x321628008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913'
		);
	});
});
