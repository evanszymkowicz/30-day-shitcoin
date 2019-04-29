import Link from 'next/link';

const Navbar = () => (
<div>
<ul>
	<li><Link href="/"><a>Home</a></Link></li>
	<li><Link href="/about"><a>About</a></Link></li>
</ul>
	//Going to be replaced with  bootstrap
	<style jsx>{`
		ul {
			background: #333
		}
	`}</style>
</div>
);

export default Navbar;
