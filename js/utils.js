// email=hj&password=n&confirmPassword=j ->
// { email: hj, password: n, confirmPassword: j }
export function getFieldsFromString (str) {
  const paramsArray = str.split('&');
  const params = {};

  for (let p of paramsArray) {
    const field = p.split('=')[0];
    params[field] = decodeURIComponent(p.split('=')[1]);
  }
  return params;
}
