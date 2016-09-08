import test from 'ava';
import x from './';

test(t => {
	t.true(x.all.length > 0);
	t.truthy(x.random());
	t.not(x.random(), x.random());
	t.is(x.all[0], 'Adorable');
	t.is(x.all[1], 'Alliebear');
});
