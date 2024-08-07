import Image from 'next/image'
import DialogModal from './Dialog'
import Link from 'next/link'

const NavBar = () => {
	return (
		<header>
			<nav className='bg-neutral-800 px-4 py-2.5 lg:px-6'>
				<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
					<Link
						href='/'
						className='flex gap-x-1 self-center whitespace-nowrap text-xl font-semibold text-white md:gap-x-3'
					>
						<Image
							src='/structura.svg'
							alt='structura svg'
							width={32}
							height={32}
						/>
						<span>Structura</span>
					</Link>
					<div className='flex items-center lg:order-2'>
						<DialogModal />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
