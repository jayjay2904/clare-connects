import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
afterEach(() => cleanup())
Object.defineProperty(window, 'scrollTo', { value: () => undefined, writable: true })
Object.defineProperty(Element.prototype, 'scrollIntoView', { value: () => undefined, writable: true })
