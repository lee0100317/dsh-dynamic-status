// dsh-dynamic-status — server side (thin: no host services needed).
// The real work is done in the browser half (client.js).
export const name = 'dynamic-status'
export const inject = []

export function apply(_ctx) {
  // No host-side services needed — the client half replaces the
  // "Deep diving..." text via DOM mutation observation.
}