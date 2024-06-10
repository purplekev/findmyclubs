import Button from './components/Button'

export default function DashboardPage() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-8xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            findmyclubs
          </span>
          <br />
          {/* connecting students */}
        </h1>
        <div className='my-6 px-20 text-center text-3xl text-text-secondary'>
            connecting students with endless opportunities
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              Get Started!
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>1. Interests</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
                Select any interests/hobbies from our list, or search input your own.
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>2. Areas of study</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Choose your faculty, area of studies or any field you&rsquo;re interested in.
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>3. Match</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              We&rsquo;ll match you with all the clubs and programs we&rsquo;d think interests you!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
