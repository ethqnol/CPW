/*
 * Created on Sun Feb 4 2024
 *
 * Copyright (c) 2023 Thomas Zhou
 */

import type { SVG } from './types'

// <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 419 511.67">
//     <path d="M93.01 39.4h46.12C141.84 17.18 159.77 0 181.52 0c21.61 0 39.45 16.95 42.33 38.94l46.77.46c2.61 0 4.7 2.1 4.7 4.71v51.84a4.69 4.69 0 0 1-4.7 4.71H93.06c-2.57 0-4.71-2.1-4.71-4.71V44.11a4.632 4.632 0 0 1 4.66-4.71zm221.96 264.22c57.47 0 104.03 46.58 104.03 104.02 0 57.47-46.59 104.03-104.03 104.03-57.47 0-104.02-46.58-104.02-104.03 0-57.47 46.58-104.02 104.02-104.02zm-16.11 52.48h16.95c3.09 0 5.64 2.55 5.64 5.64v46.34h35.77c3.11 0 5.66 2.55 5.66 5.66v16.94c0 3.12-2.55 5.66-5.66 5.66h-64.03v-74.6c0-3.09 2.55-5.64 5.67-5.64zm-166.33-87.53c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM89.5 241.21c7.98 0 14.44 6.47 14.44 14.45 0 7.98-6.46 14.43-14.44 14.43-7.97 0-14.44-6.45-14.44-14.43 0-7.98 6.47-14.45 14.44-14.45zm0 78.62c7.98 0 14.44 6.47 14.44 14.45 0 7.97-6.46 14.43-14.44 14.43-7.97 0-14.44-6.46-14.44-14.43 0-7.98 6.47-14.45 14.44-14.45zm43.04 27.37c-7.13 0-12.93-5.8-12.93-12.93s5.8-12.93 12.93-12.93h80.96a133.376 133.376 0 0 0-17.26 25.86h-63.7zM89.5 162.61c7.98 0 14.44 6.46 14.44 14.43 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.44-6.46-14.44-14.44 0-7.97 6.47-14.43 14.44-14.43zm43.03 27.35c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM41.73 59.28h23.93v24.37H41.73c-4.77 0-9.12 1.97-12.25 5.1-3.14 3.14-5.1 7.48-5.1 12.24v315.53c0 4.74 1.96 9.09 5.1 12.23 3.15 3.15 7.51 5.12 12.25 5.12h142.61c1.69 8.44 4.17 16.6 7.37 24.38H41.73c-11.45 0-21.9-4.71-29.47-12.28C4.72 438.43 0 427.98 0 416.52V100.99c0-11.48 4.7-21.91 12.25-29.46 7.55-7.55 17.99-12.25 29.48-12.25zm297.54 217.35V100.99c0-4.77-1.96-9.11-5.09-12.26a17.36 17.36 0 0 0-12.26-5.08H298V59.28h23.92c11.44 0 21.86 4.71 29.41 12.25 7.61 7.61 12.32 18.04 12.32 29.46V283.6c-7.79-3.07-15.95-5.42-24.38-6.97zM181.03 20.16c12.29 0 22.26 9.96 22.26 22.27 0 12.29-9.97 22.26-22.26 22.26-12.3 0-22.26-9.97-22.26-22.26 0-12.31 9.96-22.27 22.26-22.27z"/>
// </svg>

export default {
    attributes: {
        viewBox: '0 0 419 511.67',
        'clip-rule': 'evenodd',
        'fill-rule': 'evenodd',
    },
    source: `<path d="M93.01 39.4h46.12C141.84 17.18 159.77 0 181.52 0c21.61 0 39.45 16.95 42.33 38.94l46.77.46c2.61 0 4.7 2.1 4.7 4.71v51.84a4.69 4.69 0 0 1-4.7 4.71H93.06c-2.57 0-4.71-2.1-4.71-4.71V44.11a4.632 4.632 0 0 1 4.66-4.71zm221.96 264.22c57.47 0 104.03 46.58 104.03 104.02 0 57.47-46.59 104.03-104.03 104.03-57.47 0-104.02-46.58-104.02-104.03 0-57.47 46.58-104.02 104.02-104.02zm-16.11 52.48h16.95c3.09 0 5.64 2.55 5.64 5.64v46.34h35.77c3.11 0 5.66 2.55 5.66 5.66v16.94c0 3.12-2.55 5.66-5.66 5.66h-64.03v-74.6c0-3.09 2.55-5.64 5.67-5.64zm-166.33-87.53c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM89.5 241.21c7.98 0 14.44 6.47 14.44 14.45 0 7.98-6.46 14.43-14.44 14.43-7.97 0-14.44-6.45-14.44-14.43 0-7.98 6.47-14.45 14.44-14.45zm0 78.62c7.98 0 14.44 6.47 14.44 14.45 0 7.97-6.46 14.43-14.44 14.43-7.97 0-14.44-6.46-14.44-14.43 0-7.98 6.47-14.45 14.44-14.45zm43.04 27.37c-7.13 0-12.93-5.8-12.93-12.93s5.8-12.93 12.93-12.93h80.96a133.376 133.376 0 0 0-17.26 25.86h-63.7zM89.5 162.61c7.98 0 14.44 6.46 14.44 14.43 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.44-6.46-14.44-14.44 0-7.97 6.47-14.43 14.44-14.43zm43.03 27.35c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM41.73 59.28h23.93v24.37H41.73c-4.77 0-9.12 1.97-12.25 5.1-3.14 3.14-5.1 7.48-5.1 12.24v315.53c0 4.74 1.96 9.09 5.1 12.23 3.15 3.15 7.51 5.12 12.25 5.12h142.61c1.69 8.44 4.17 16.6 7.37 24.38H41.73c-11.45 0-21.9-4.71-29.47-12.28C4.72 438.43 0 427.98 0 416.52V100.99c0-11.48 4.7-21.91 12.25-29.46 7.55-7.55 17.99-12.25 29.48-12.25zm297.54 217.35V100.99c0-4.77-1.96-9.11-5.09-12.26a17.36 17.36 0 0 0-12.26-5.08H298V59.28h23.92c11.44 0 21.86 4.71 29.41 12.25 7.61 7.61 12.32 18.04 12.32 29.46V283.6c-7.79-3.07-15.95-5.42-24.38-6.97zM181.03 20.16c12.29 0 22.26 9.96 22.26 22.27 0 12.29-9.97 22.26-22.26 22.26-12.3 0-22.26-9.97-22.26-22.26 0-12.31 9.96-22.27 22.26-22.27z"/>`
} as SVG
