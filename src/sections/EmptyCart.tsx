import animation from '../animations/animation.module.css'

export default function EmptyCart() {
  return (
    <section className='h-screen w-full flex items-center justify-center bg-neutral-200'>
      <article
        className={`${animation.load} w-1/4 h-[75%] bg-neutral-100/70 rounded-2xl shadow-xl shadow-neutral-900/30 border border-neutral-400 flex flex-col justify-center gap-y-10 items-center`}
      >
        <svg
          className='size-20 text-red-500 drop-shadow-lg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentcolor'
            d='m16.62 13.42l-2.12-2.1c2.34-2.38 5.33-3.21 5.33-3.21c-.96 2.49-2.1 4.16-3.21 5.31M12 2s-1.14 2.3-1.59 5.21l3.31 3.29c.2-2.05-.11-4.87-1.72-8.5m8.84 20.73l1.27-1.27L2.39 1.73L1.11 3l7.51 7.5C6.5 8.75 4.17 8.11 4.17 8.11C5.7 12.08 7.69 14 9.28 14.97C6.47 14.59 4 16 4 16c2.68 1.19 4.64 1.23 5.94.95c-1.41 1.15-1.91 2.86-1.91 2.86c1.97-.72 2.97-1.68 3.47-2.46V22h1v-4.65c.5.78 1.5 1.74 3.47 2.46c0 0-.5-1.71-1.91-2.86c.33.05.71.12 1.14.14z'
          />
        </svg>
        <div className='flex flex-col items-center gap-y-5'>
          <h2 className='font-black text-xl'>Carrito vacio</h2>
          <p className='font-semibold text-sm'>
            Agrega alguna de nuestras semillas
          </p>
        </div>
        <a
          href='/'
          className='bg-amber-300 text-amber-950 border border-amber-950 shadow-lg shadow-neutral-900/20 font-bold px-6 py-1 rounded-full hover:scale-105 hover:bg-amber-950 hover:text-amber-100 hover:shadow-neutral-900/40 transition-all duration-300'
        >
          Volver
        </a>
      </article>
    </section>
  )
}
