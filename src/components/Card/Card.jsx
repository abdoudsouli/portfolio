export default function Card({img,code,title,url}) {
  return (

<div className="bg-neutral-primary-soft  border border-gray-900 dark:border-red-900   rounded-3xl shadow-gray-400 dark:shadow-red-900 shadow-lg transition-all ease-in-out duration-700 hover:scale-105">
    <a href={url}>
        <img className="rounded-t-3xl w-full" src={img} alt="" />
    </a>
    <div className="p-6 text-center">
        <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
          {code}
        </span>
        <a href="#">
            <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
        </a>
        <a href={url} className="inline-flex items-center bg-brand box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Read more
            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
        </a>
    </div>
</div>

  )
}
