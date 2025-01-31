/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

import { cva } from 'class-variance-authority'

const button = cva('rounded-sm px-4 py-2.5 text-base font-semibold', {
  variants: {
    variant: {
      bluePrimary:
        'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-grey-50',
      blueSecondary:
        'bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-600',
      blueGhost:
        'bg-blue-50/0 hover:bg-blue-50 active:bg-blue-100 text-blue-600',
      monochromePrimary:
        'bg-grey-50 hover:bg-grey-150 active:bg-grey-250 text-grey-950',
      monochromeSecondary:
        'bg-grey-100 hover:bg-grey-150 active:bg-grey-200 text-grey-950',
      monochromeGhost:
        'bg-grey-50/0 hover:bg-grey-100 active:bg-grey-150 text-grey-950',
      destructive: 'bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-500',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'bg-grey-150 text-grey-300 pointer-events-none',
    },
  },
})

function Button({ children, variant, fullWidth, disabled }) {
  return (
    <button className={button({ variant, fullWidth, disabled })}>
      {children}
    </button>
  )
}

export default Button
