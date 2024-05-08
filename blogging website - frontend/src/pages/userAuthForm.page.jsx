import React from 'react'

export default function UserAuthForm({ type}) {
  return (
    <section className='h-cover flex items-center justify-center'>
        <form className='w-[80%] max-w-[400px]'>
            <h1 className='text-4xl font-gelasio capitalize text-center mb-24'>
                {type} 
            </h1>
        </form>
    </section>
  )
}
