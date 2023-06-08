import {
  Bars2Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

export default function App() {
  function formatDate(date: Date) {
    const options: any = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };

    return date.toLocaleString('en-US', options);
  }

  function Header() {
    return (
      <div className='flex grow justify-between items-center p-10'>
        <button className="hover:bg-neutral-200 transform duration-200 p-2 rounded-lg" title='Hey' type='button'>
          <Bars2Icon className="h-10 w-auto text-neutral-800" />
        </button>
        <div className='w-[40rem] flex items-center'>
          <MagnifyingGlassIcon className='h-6 text-neutral-400 absolute ml-4'></MagnifyingGlassIcon>
          <input className='bg-neutral-100 w-full pl-14 pr-6 py-2 rounded-full placeholder:text-center focus:outline-neutral-200 text-neutral-600' id="search" placeholder='Type a name or ID to search or add a guest.' />
        </div>
        <h1 className='text-3xl font-medium'>Le Concierge</h1>
      </div>
    );
  }

  function MainBody() {
    const date = new Date();

    return (
      <div className='flex grow justify-center p-10'>
        <div className='max-w-6xl w-full text-center'>
          <h1 className='text-5xl font-light mb-12'>{formatDate(date)}</h1>
          <div className="flex w-full justify-evenly bg-neutral-100 rounded-3xl py-6 cursor-default">
            <div className="flex flex-col space-y-4 hover:bg-neutral-200 transform duration-200 p-6 rounded-3xl">
              <h1 className="text-6xl font-semibold">
                12
              </h1>
              <p className="font-semibold">
                Appointments today
              </p>
            </div>
            <div className="flex flex-col space-y-4 hover:bg-neutral-200 transform duration-200 p-6 rounded-3xl">
              <h1 className="text-6xl font-semibold text-neutral-500">
                3
              </h1>
              <p className="text-neutral-500">
                Guests checked-in
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <MainBody />
    </div>
  )
}
