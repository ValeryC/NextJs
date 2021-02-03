import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><Image src="/logo.png" width={128} height={77} /></Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/lists"><a>My list</a></Link>
    </nav>
  );
}

export default Navbar; 