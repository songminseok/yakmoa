export function camelToUpperSnakeCase(camel) {
  return camel.replace(/([A-Z])/g, '_$&').toUpperCase();
}
