import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
	stages: [
		{ duration: '1m', target: 40 },
		{ duration: '120m', target: 40 },
	]
};

export default function () {
	const params = {
		headers: {
			'Cookie': 'wordpress_logged_in=foo'
		}
	};

	const res = http.get('https://platform-test.aws.hmn.md/', params);
	check(res, { 'status was 200': (r) => r.status == 200 });
	sleep(1);
}
