import React from 'react'
import Link from 'next/link'
export default function Products() {
  return (
    <div>
       <Link href="/">Home</Link>
        <h1>Products</h1>
        
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
    </div>
  )
}
