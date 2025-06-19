import { URL } from 'node:url';

// Get the absolute path to fake-lodash.js
// We need to resolve it relative to *this loader file's location*
const fakeLodashURL = new URL('./src/fake-lodash.js', import.meta.url);

export async function resolve(specifier, context, nextResolve) {
  // `specifier` is what's in the import statement (e.g., 'lodash')
  // `context.parentURL` is the URL of the module doing the import
  // `nextResolve` is the default Node.js resolver function

  if (specifier === 'lodash') {
    // If 'lodash' is being imported, we tell Node to load our fake one instead.
    return {
      shortCircuit: true, // Tells Node.js we're done resolving, use this URL
      url: fakeLodashURL.href // Must be a URL string
    };
  }

  // For any other module, let Node.js handle it as usual.
  return nextResolve(specifier, context);
}
