import { browser } from "$app/env";

async function send({ method, path, data, multipart }) {

	const opts = { method, headers: {}, body: null};

	if (data) {
		if(multipart){
			opts.body = data;
		}else{
			opts.headers['Content-Type'] = 'application/json';
			opts.body = JSON.stringify(data);
		}
	}
  
	if (browser){
		const token = await localStorage.getItem("token");
		if (token) {
			opts.headers['token'] = `${token}`;
		}
	}

	return fetch(`${import.meta.env.VITE_API_HOST}/${path}`, opts)
		.then((r) => {
			if(r.status != 200){
				throw r.text()
			}
			return r.text()
		})
		.then((json) => {
			return JSON.parse(json);
		});
}

export function get(path) {
	return send({ method: 'GET', path, data : null, multipart : false });
}

export function del(path) {
	return send({ method: 'DELETE', path, data : null, multipart : false });
}

export function post(path, data) {
	return send({ method: 'POST', path, data, multipart : false });
}

export function multipart(path, data) {
	return send({ method: 'POST', path, data, multipart: true  });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data, multipart : false });
}